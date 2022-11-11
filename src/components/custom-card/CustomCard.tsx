import { FC, useState } from 'react';
import styled from 'styled-components';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';
import CustomLoader from '../custom-loader/CustomLoader';
import DetailsModal from '../details-modal/DetailsModal';

type Props = {
  title: string;
  image: string;
  isActive: boolean;
  details: string;
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
  margin: 20px auto;
  padding: 10px;
  transition: box-shadow 0.2s ease-in-out;
  max-width: 75%;
  box-shadow: ${(props) =>
    props.isActive ? '0px 0px 20px 3px var(--secondary)' : ''};

  @media ${MEDIA_MIN_TABLET} {
    margin: 15px auto 45px;
    padding: 25px;
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
    max-width: 100%;
    height: auto;
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
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0 5px;
  height: 48px;
`;
