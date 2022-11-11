import { FC, useState } from 'react';
import styled from 'styled-components';
import { Result } from '../../screens/select-screen/SelectScreen';
import CustomLoader from '../custom-loader/CustomLoader';
import DetailsModal from '../details-modal/DetailsModal';

type Props = {
  title: string;
  image: string;
  isActive: boolean;
  details: Result[];
  onClick: () => void;
};

const CustomCard: FC<Props> = ({
  title,
  image,
  isActive,
  details,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => setIsLoaded(true);
  return (
    <StyledWrapper onClick={onClick} isActive={isActive}>
      <StyledImageWrapper>
        <img src={image} alt={title} onLoad={handleLoaded} />
        {!isLoaded && <CustomLoader />}
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledTitle>{title}</StyledTitle>
        <DetailsModal details={details}>Details</DetailsModal>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};

export default CustomCard;

const StyledWrapper = styled.div<{ isActive: boolean }>`
  background: var(--white);
  border-radius: 15px;
  margin: 10px auto;
  padding: 10px;
  transition: box-shadow 0.2s ease-in-out;
  max-width: 50%;
  box-shadow: ${(props) =>
    props.isActive ? '0px 0px 20px 3px var(--secondary)' : ''};

  @media (min-width: 768px) {
    max-width: fit-content;
    padding: 25px;
    margin: 25px;
  }

  &:active,
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 3px var(--secondary);
    -moz-box-shadow: 0px 0px 20px 3px var(--secondary);
    box-shadow: 0px 0px 20px 3px var(--secondary);
  }
`;
const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);

  img {
    max-width: 50%;
    height: auto;

    @media (min-width: 768px) {
      max-width: 75%;
    }
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h5`
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 10px;
  min-height: 32px;
`;
