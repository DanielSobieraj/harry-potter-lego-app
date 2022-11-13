import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { sendSummaryData } from '../../api/apiClient';
import OrderForm from '../../components/order-form/OrderForm';
import OrderSummary from '../../components/order-summary/OrderSummary';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';
import { SummaryFormProps, SummaryRequestData } from '../../utils/interfaces';

const FORM_ID = 'DELIVERY_FORM';

const SummaryScreen: FC = () => {
  const { figureId } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<SummaryFormProps>();

  const onSubmit = useCallback(
    (data: SummaryFormProps) => {
      if (!figureId) return;
      const payload: SummaryRequestData = {
        contactData: data,
        figureId,
      };
      sendSummaryData(payload);
      navigate('/');
    },
    [figureId, navigate]
  );

  return (
    <StyledWrapper>
      <OrderForm
        id={FORM_ID}
        register={register}
        errors={formState.errors}
        onSubmit={handleSubmit(onSubmit)}
      />
      <OrderSummary
        figureId={figureId}
        disabled={!formState.isValid && formState.isSubmitted}
        formId={FORM_ID}
      />
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
