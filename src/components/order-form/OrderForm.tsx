import { ErrorMessage } from '@hookform/error-message';
import { FC, FormEventHandler } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { SummaryFormProps } from '../../utils/interfaces';
import {
  CITY_REGEXP,
  MAIL_REGEXP,
  PHONE_REGEXP,
  ZIP_CODE_REGEXP,
} from '../../utils/regex';

interface Props {
  id: string;
  register: UseFormRegister<SummaryFormProps>;
  errors: Partial<FieldErrorsImpl<SummaryFormProps>>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const OrderForm: FC<Props> = ({ onSubmit, register, id, errors }) => {
  return (
    <form onSubmit={onSubmit} id={id}>
      <StyledWrapper>
        <StyledInputWrapper>
          <label>First Name</label>
          <StyledInput
            {...register('firstName', {
              required: { value: true, message: 'First name is required' },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            as={StyledErrorMessage}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label>Surname</label>
          <StyledInput
            {...register('surname', {
              required: { value: true, message: 'Surname is required' },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="surname"
            as={StyledErrorMessage}
          />
        </StyledInputWrapper>
      </StyledWrapper>
      <StyledInputWrapper>
        <label>Phone number</label>
        <StyledInput
          type="tel"
          {...register('tel', {
            required: { value: true, message: 'Phone number is required' },
            pattern: {
              value: PHONE_REGEXP,
              message: 'The phone number must have an area code',
            },
          })}
        />
        <ErrorMessage errors={errors} name="tel" as={StyledErrorMessage} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Email</label>
        <StyledInput
          type="email"
          {...register('email', {
            required: { value: true, message: 'Email address is required' },
            pattern: {
              value: MAIL_REGEXP,
              message: 'The email address is invalid',
            },
          })}
        />
        <ErrorMessage errors={errors} name="email" as={StyledErrorMessage} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Date of birth</label>
        <StyledInput
          type="date"
          {...register('birthday', {
            required: { value: true, message: 'Date of birth is required' },
          })}
        />
        <ErrorMessage errors={errors} name="birthday" as={StyledErrorMessage} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Address</label>
        <StyledInput
          {...register('address', {
            required: { value: true, message: 'Address is required' },
          })}
        />
        <ErrorMessage errors={errors} name="address" as={StyledErrorMessage} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>City</label>
        <StyledInput
          {...register('city', {
            required: { value: true, message: 'City is required' },
            pattern: {
              value: CITY_REGEXP,
              message: 'City name is invalid',
            },
          })}
        />
        <ErrorMessage errors={errors} name="city" as={StyledErrorMessage} />
      </StyledInputWrapper>
      <StyledWrapper>
        <StyledInputWrapper>
          <label>State</label>
          <StyledInput
            {...register('state', {
              required: { value: true, message: 'State is required' },
              pattern: {
                value: CITY_REGEXP,
                message: 'State name is invalid',
              },
            })}
          />
          <ErrorMessage errors={errors} name="state" as={StyledErrorMessage} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label>Zip Code</label>
          <StyledInput
            {...register('zipcode', {
              required: { value: true, message: 'Zip code is required' },
              pattern: {
                value: ZIP_CODE_REGEXP,
                message: 'Zip code is invalid',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="zipcode"
            as={StyledErrorMessage}
          />
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
    white-space: nowrap;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
  transition: outline 0.2s ease-in-out;
  border-color: transparent;

  &:focus-visible {
    outline-color: var(--primary);
  }
`;

const StyledErrorMessage = styled.span`
  color: var(--secondary);
  display: flex;
  justify-content: center;
  font-size: 10px;
`;
