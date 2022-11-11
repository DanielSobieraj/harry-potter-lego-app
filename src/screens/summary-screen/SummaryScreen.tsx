import styled from 'styled-components';
import OrderForm from '../../components/order-form/OrderForm';
import OrderSummary from '../../components/order-summary/OrderSummary';

const SummaryScreen = () => {
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
  flex-wrap: wrap;
  color: var(--white);
  margin: 10px;
`;
