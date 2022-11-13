import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';

type Props = {
  children?: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    width: 540px;
  }
  @media ${MEDIA_MIN_TABLET} {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1320px;
  }
`;
