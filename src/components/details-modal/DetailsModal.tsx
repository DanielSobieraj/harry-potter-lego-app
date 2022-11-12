import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import CustomImage from '../custom-image/CustomImage';
import { Root } from './DetailsModalProps';

type Props = {
  children: ReactNode;
  details?: string;
};

const DetailsModal: FC<Props> = ({ children, details }) => {
  const [partsDetails, setPartsDetails] = useState<Root>();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getPartsDetails = useCallback(async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${details}/parts?key=e0c51028c5829d91802ef1224f00a007`
    ).then((data) => data.json());
    setPartsDetails(response);
  }, [details]);

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
        <p>Count: {partsDetails?.count}</p>
        {partsDetails?.results.map(({ part }) => (
          <StyledDetailsBox key={part.part_num}>
            <CustomImage
              size="small"
              title={part.name}
              imageUrl={part.part_img_url}
            />
            <a href={part.part_url} target="_blank" rel="noreferrer">
              <div>
                <p>{part.name}</p>
                <p>
                  Part number:{' '}
                  <StyledPartNumber>{part.part_num}</StyledPartNumber>
                </p>
              </div>
            </a>
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

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    padding: 0 5px;
  }
`;

const StyledPartNumber = styled.span`
  color: var(--secondary);
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
