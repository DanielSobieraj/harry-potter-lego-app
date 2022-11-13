import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { IMG_PLACEHOLDER_URL } from '../../utils/constants/common';
import CustomLoader from '../custom-loader/CustomLoader';

const CustomImage: FC<Props> = ({ size, imageUrl, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoaded = () => setIsLoaded(true);

  return (
    <StyledImageWrapper>
      <StyledImg
        src={imageUrl ? imageUrl : IMG_PLACEHOLDER_URL}
        alt={title}
        onLoad={handleLoaded}
        loading="lazy"
        size={size}
      />
      {!isLoaded && <CustomLoader />}
    </StyledImageWrapper>
  );
};

export default CustomImage;

interface Props {
  size: 'large' | 'small';
  imageUrl?: string | null;
  title?: string;
}

const SIZE = {
  large: css`
    max-width: 100%;
    height: auto;
    max-height: 200px;
    min-height: 100px;
  `,
  small: css`
    width: 35px;
    height: 35px;
    margin-right: 10px;
  `,
};

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  min-height: 50px;
`;

const StyledImg = styled.img<Props>`
  ${(props) => props.size && SIZE[props.size]}
`;
