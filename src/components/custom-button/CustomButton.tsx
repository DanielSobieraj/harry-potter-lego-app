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
  disabled?: boolean;
};

const CustomButton: FC<Props> = ({ children, textTransform, to, disabled }) => {
  return (
    <StyledWrapper>
      <Link to={to}>
        <StyledButton disabled={disabled} textTransform={textTransform}>
          {children}
        </StyledButton>
      </Link>
    </StyledWrapper>
  );
};

export default memo(CustomButton);

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;
`;

const StyledButton = styled.button<{ textTransform: Props['textTransform'] }>`
  font-family: 'Milky Boba', sans-serif;
  letter-spacing: 2px;
  text-transform: ${(props) => props.textTransform};
  padding: 10px 75px 5px;
  border-radius: 25px;
  border: 1px solid transparent;
  background-color: ${(props) => (props.disabled ? 'grey' : 'var(--primary)')};

  color: var(--white);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) =>
      props.disabled ? 'grey' : 'var(--primary-hover)'};
  }
`;
