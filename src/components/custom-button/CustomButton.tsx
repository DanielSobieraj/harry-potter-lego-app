import { FC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
  formId: string;
  textTransform?:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';
  disabled?: boolean;
};

const CustomButton: FC<Props> = ({
  children,
  textTransform,
  formId,
  disabled,
}) => {
  return (
    <StyledWrapper>
      <StyledButton
        disabled={disabled}
        textTransform={textTransform}
        form={formId}
      >
        {children}
      </StyledButton>
    </StyledWrapper>
  );
};

export default memo(CustomButton);

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;

  a {
    opacity: 1;
  }
`;

const StyledButton = styled.button<{ textTransform: Props['textTransform'] }>`
  font-family: 'K26PrimrosePeach', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: ${(props) => props.textTransform};
  padding: 10px 75px;
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
