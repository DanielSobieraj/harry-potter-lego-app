import styled from 'styled-components';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';
import CustomButton from '../custom-button/CustomButton';

const OrderSummary = () => {
  return (
    <StyledWrapper>
      <img src="" alt="" />
      <p>name</p>
      <p>parts</p>
      <p>name</p>
      <CustomButton to="submit">Submit</CustomButton>
    </StyledWrapper>
  );
};

export default OrderSummary;

const StyledWrapper = styled.div`
  background: var(--white);
  color: var(--black);
  width: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  padding: 10px 0;

  @media ${MEDIA_MIN_TABLET} {
    margin-left: 5%;
    width: 50%;
  }
`;
