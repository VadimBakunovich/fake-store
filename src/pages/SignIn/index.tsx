import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { ValidationError } from 'components/ValidationError';
import F from 'components/FormItems';
import { EyeBtn } from 'components/Buttons/EyeBtn';
import { RectBtnUC } from 'components/Buttons/RectBtn';
import { LinkBtnUC } from 'components/Buttons/LinkBtn';

import { useStore } from 'store';
import schema from './schema';
import S from './styled';
import C from 'constants';

type Inputs = {
  email: string;
  password: string;
};

type Location = { state: { to?: string } };

export default function SignIn() {
  const [isPasswVisible, setPasswVisible] = useState(false);
  const [authError, setAuthErr] = useState('');
  const { toggleAuthorize } = useStore();
  const { state } = useLocation() as Location;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur', resolver: zodResolver(schema) });

  const onSubmit = ({ email, password }: Inputs) => {
    const savedEmail = localStorage.getItem('fake store userEmail');
    const savedPassw = localStorage.getItem('fake store userPassw');
    const isEmailMatch = email === savedEmail;
    const isPasswMatch = password === savedPassw;

    if (isEmailMatch && isPasswMatch) {
      toggleAuthorize();
      const to = state?.to || '/';
      navigate(to, { replace: true });
    } else setAuthErr('Wrong email or password');
  };

  const handleClick = () => setPasswVisible(!isPasswVisible);

  return (
    <>
      <F.Title>Sign In</F.Title>
      <F.Form onSubmit={handleSubmit(onSubmit)}>
        <F.Input
          type='email'
          placeholder='Enter your email...'
          {...register('email')}
        />
        <ValidationError message={errors.email?.message} />

        <F.PassWrapper>
          <F.Input
            type={isPasswVisible ? 'text' : 'password'}
            placeholder='Enter your password...'
            {...register('password')}
          />
          <ValidationError message={errors.password?.message} />
          <EyeBtn isVisible={isPasswVisible} handleClick={handleClick} />
        </F.PassWrapper>

        <F.Note>{C.NOTE}</F.Note>
        <RectBtnUC type='submit'>sign in</RectBtnUC>
        <S.Alt>or</S.Alt>
        <LinkBtnUC to='/signUp'>sign up</LinkBtnUC>
        <S.AuthErr err={authError}>{authError}</S.AuthErr>
      </F.Form>
    </>
  );
}
