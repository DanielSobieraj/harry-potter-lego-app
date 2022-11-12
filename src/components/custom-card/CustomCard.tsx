import { FC } from 'react';
import styled from 'styled-components';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';
import CustomImage from '../custom-image/CustomImage';
import DetailsModal from '../details-modal/DetailsModal';

type Props = {
  title: string;
  image: string | null;
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
  return (
    <StyledWrapper onClick={onClick} isActive={isActive}>
      <CustomImage size="large" imageUrl={image} title={title} />
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
  visibility: ${(props) => (props.onLoad ? 'hidden' : 'visible')};

  @media ${MEDIA_MIN_TABLET} {
    margin: 15px auto;
    padding: 25px;
    min-height: 200px;
  }

  &:active,
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 3px var(--secondary);
    -moz-box-shadow: 0px 0px 20px 3px var(--secondary);
    box-shadow: 0px 0px 20px 3px var(--secondary);
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
