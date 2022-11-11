import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  children: string;
  to: string;
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
};

const CustomButton: FC<Props> = ({ children, textTransform, to }) => {
  return (
    <StyledWrapper>
      <StyledLink to={to}>
        <StyledButton textTransform={textTransform}>{children}</StyledButton>
      </StyledLink>
    </StyledWrapper>
  );
};

export default memo(CustomButton);

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button<{ textTransform: Props['textTransform'] }>`
  font-family: 'Milky Boba', sans-serif;
  letter-spacing: 2px;
  text-transform: ${(props) => props.textTransform};
  padding: 10px 75px 5px;
  border-radius: 25px;
  border: 1px solid transparent;
  background-color: var(--primary);
  color: var(--white);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-hover);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
