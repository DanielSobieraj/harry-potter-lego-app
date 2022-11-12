import { FC } from 'react';
import styled from 'styled-components';
import OrderForm from '../../components/order-form/OrderForm';
import OrderSummary from '../../components/order-summary/OrderSummary';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';

const SummaryScreen: FC = () => {
  return (
    <StyledWrapper>
      <OrderForm />
      <OrderSummary />
    </StyledWrapper>
  );
};

export default SummaryScreen;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: var(--white);
  margin: 10px;
  flex-wrap: wrap;

  @media ${MEDIA_MIN_TABLET} {
    flex-wrap: nowrap;
    align-items: center;
  }
`;
