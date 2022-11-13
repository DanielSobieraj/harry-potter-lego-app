import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';

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

const CustomLink: FC<Props> = ({ children, textTransform, to, disabled }) => {
  return (
    <StyledWrapper>
      <StyledLink to={to} disabled={disabled} texttransform={textTransform}>
        {children}
      </StyledLink>
    </StyledWrapper>
  );
};

export default memo(CustomLink);

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;

  a {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)<{
  texttransform: Props['textTransform'];
  disabled: Props['disabled'];
}>`
  font-family: 'K26PrimrosePeach', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: ${(props) => props.texttransform};
  padding: 10px 30px;
  border-radius: 25px;
  border: 1px solid transparent;
  background-color: ${(props) => (props.disabled ? 'grey' : 'var(--primary)')};
  color: var(--white);
  transition: background-color 0.2s ease-in-out;

  @media ${MEDIA_MIN_TABLET} {
    padding: 10px 75px;
  }

  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) =>
      props.disabled ? 'grey' : 'var(--primary-hover)'};
  }
`;
