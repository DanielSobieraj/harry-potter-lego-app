import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

interface IFormInput {
  firstName: string;
  surname: string;
  tel: number;
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
          <StyledInput required {...register('firstName')} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label>Surname</label>
          <StyledInput required {...register('surname')} />
        </StyledInputWrapper>
      </StyledWrapper>
      <StyledInputWrapper>
        <label>Phone number</label>
        <StyledInput required type="tel" {...register('tel')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Email</label>
        <StyledInput required type="email" {...register('email')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Date of birth</label>
        <StyledInput required type="date" {...register('birthday')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Address</label>
        <StyledInput required {...register('address')} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>City</label>
        <StyledInput required {...register('city')} />
      </StyledInputWrapper>
      <StyledWrapper>
        <StyledInputWrapper>
          <label>State</label>
          <StyledInput required {...register('state')} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label>Zip Code</label>
          <StyledInput required {...register('zipcode')} />
        </StyledInputWrapper>
      </StyledWrapper>
    </form>
  );
};

export default OrderForm;

const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0;
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  margin: 10px 0;

  label {
    padding-left: 10px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 25px;
  transition: outline 0.2s ease-in-out;
  border-color: transparent;

  &:focus-visible {
    outline-color: var(--primary);
    border-color: transparent;
  }
`;
