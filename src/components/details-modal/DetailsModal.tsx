import { FC, ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
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

  useEffect(() => {
    const getPartsDetails = async () => {
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/${details}/parts?key=e0c51028c5829d91802ef1224f00a007`
      ).then((data) => data.json());
      setPartsDetails(response);
    };
    getPartsDetails();
  }, [details]);

  return (
    <>
      <StyledTitle onClick={openModal}>{children}</StyledTitle>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <div>
          <p> Count: {partsDetails?.count}</p>
          <div>
            {partsDetails?.results.map(({ part }) => (
              <StyledDetailsBox key={part.part_num}>
                <img
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                  src={part.part_img_url}
                  alt={part.name}
                />
                <a href={part.part_url} target="_blank" rel="noreferrer">
                  <p>{`${part.name} - ${part.part_num}`}</p>
                </a>
              </StyledDetailsBox>
            ))}
          </div>
        </div>
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
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 0 5px;
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '75%',
    borderRadius: '25px',
  },
};
