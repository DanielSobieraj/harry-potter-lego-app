import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { getMinifigPartsDetailsRequest } from '../../api/apiClient';
import PartDetails from '../part-details/PartDetails';
import { PartsResult } from './DetailsModalProps';

type Props = {
  children: ReactNode;
  figureId?: string;
};

const DetailsModal: FC<Props> = ({ children, figureId }) => {
  const [partsDetails, setPartsDetails] = useState<PartsResult[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getPartsDetails = useCallback(async () => {
    const response = await getMinifigPartsDetailsRequest(figureId);
    setPartsDetails(response.results);
  }, [figureId]);

  useEffect(() => {
    modalIsOpen && getPartsDetails();
  }, [getPartsDetails, modalIsOpen]);

  return (
    <>
      <StyledTitle onClick={openModal}>{children}</StyledTitle>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        {partsDetails.map(({ part }) => (
          <StyledDetailsBox key={part.part_num}>
            <PartDetails
              name={part.name}
              img={part.part_img_url}
              url={part.part_url}
              partId={part.part_num}
            />
          </StyledDetailsBox>
        ))}
      </Modal>
    </>
  );
};

export default DetailsModal;

const StyledTitle = styled.p`
  color: var(--secondary);
  transition: color 0.2s ease-in-out;

  &:hover,
  &:active {
    cursor: pointer;
    color: var(--secondary-hover);
  }
`;

const StyledDetailsBox = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  padding: 5px 0;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '75%',
    borderRadius: '25px',
    maxHeight: '-webkit-fill-available',
  },
};
