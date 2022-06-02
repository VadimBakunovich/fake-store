import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { AnimatedContainer } from 'components/AnimatedContainer';
import { ValidationError } from 'components/ValidationError';
import F from 'components/FormItems';
import { EyeBtn } from 'components/Buttons/EyeBtn';
import { RectBtnUC } from 'components/Buttons/RectBtn';
import { useStore } from 'store';
import schema from './schema';
import C from 'constants';

type Inputs = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const [isPasswVisible, setPasswVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const { setUserName, toggleAuthorize } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur', resolver: zodResolver(schema) });

  const onSubmit = ({ userName, email, password }: Inputs) => {
    localStorage.setItem('fake store userName', userName);
    localStorage.setItem('fake store userEmail', email);
    localStorage.setItem('fake store userPassw', password);
    setUserName(userName);
    toggleAuthorize();
    navigate('/', { replace: true });
  };

  return (
    <AnimatedContainer>
      <F.Title>Registration</F.Title>
      <F.Form onSubmit={handleSubmit(onSubmit)}>
        <F.Input
          type='text'
          placeholder='User Name'
          {...register('userName')}
        />
        <ValidationError message={errors.userName?.message} />

        <F.Input
          type='email'
          placeholder='Email (ex: john.doe@gmail.com)'
          {...register('email')}
        />
        <ValidationError message={errors.email?.message} />

        <F.PassWrapper>
          <F.Input
            type={isPasswVisible ? 'text' : 'password'}
            placeholder='Password'
            {...register('password')}
          />
          <ValidationError message={errors.password?.message} />
          <EyeBtn
            isVisible={isPasswVisible}
            handleClick={() => setPasswVisible(!isPasswVisible)}
          />
        </F.PassWrapper>

        <F.PassWrapper>
          <F.Input
            type={isConfirmVisible ? 'text' : 'password'}
            placeholder='Confirm password'
            {...register('confirmPassword')}
          />
          <ValidationError message={errors.confirmPassword?.message} />
          <EyeBtn
            isVisible={isConfirmVisible}
            handleClick={() => setConfirmVisible(!isConfirmVisible)}
          />
        </F.PassWrapper>

        <F.Note>{C.NOTE}</F.Note>
        <RectBtnUC type='submit'>submit</RectBtnUC>
      </F.Form>
    </AnimatedContainer>
  );
}
