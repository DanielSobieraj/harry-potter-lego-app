import { FC, ReactNode, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Result } from '../../screens/select-screen/SelectScreen';

type Props = {
  children: ReactNode;
  details?: Result[];
};

const DetailsModal: FC<Props> = ({ children, details }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <StyledTitle onClick={openModal}>{children}</StyledTitle>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        {details?.map((data) => (
          <p key={data.num_parts}>{data.name}</p>
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
