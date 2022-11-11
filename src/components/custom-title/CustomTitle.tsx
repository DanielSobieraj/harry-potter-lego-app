import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  color?: string;
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
};

const CustomTitle: FC<Props> = ({ children, color, textTransform }) => {
  return (
    <StyledTitle color={color} textTransform={textTransform}>
      {children}
    </StyledTitle>
  );
};

export default CustomTitle;

const StyledTitle = styled.h1<{ textTransform: Props['textTransform'] }>`
  text-transform: ${(props) => props.textTransform};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  text-align: center;
`;
