import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

interface IFormInput {
  firstName: string;
  secondName: string;
  phone: number;
  email: string;
  birthday: Date;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

const OrderForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledWrapper>
        <StyledInputWrapper>
          <label>First Name</label>
          <StyledInput {...register('firstName')} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label>Second Name</label>
          <StyledInput {...register('secondName')} />
        </StyledInputWrapper>
      </StyledWrapper>
      <StyledInputWrapper>
        <label>Phone number</label>
        <StyledInput {...register('phone')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Email</label>
        <StyledInput {...register('email')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Date of birth</label>
        <StyledInput {...register('birthday')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Address</label>
        <StyledInput {...register('address')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>City</label>
        <StyledInput {...register('city')} />
      </StyledInputWrapper>
      <StyledWrapper>
        <StyledInputWrapper>
          <label>State</label>
          <StyledInput {...register('state')} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label>Zip Code</label>
          <StyledInput {...register('zipcode')} />
        </StyledInputWrapper>
      </StyledWrapper>
    </form>
  );
};

export default OrderForm;

const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledInputWrapper = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
