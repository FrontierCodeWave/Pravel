'use client';

import { useFormState } from 'react-dom';

import ControlInput from '@/components/auth/ControlInput';
import InputForm from '@/components/form/InputForm';
import { loginAction as login } from '@/lib/actions/auth-action';
import { PLACEHOLDER } from '@/lib/const/auth-message';
import { validateId } from '@/lib/validate/auth-validate';
import { LoginForm as LoginFormType } from '@/types/auth.type';

import Button from '../button/Button';
import FullLoadingSpinner from '../common/loading/FullLoadingSpinner';

import PasswordInput from './input/PasswordInput';
import AuthFormItem from './AuthFormItem';

const data: LoginFormType = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [error, loginAction] = useFormState(login, {
    redirect: false,
    error: false,
  });

  const onSubmit = async (form: LoginFormType) => {
    await loginAction(form);
  };

  if (!error || error.redirect) {
    return <FullLoadingSpinner />;
  }

  return (
    <InputForm
      data={data}
      buttons={
        <>
          <Button className="w-full h-[70px]" type="submit" flex>
            로그인
          </Button>
        </>
      }
      error={error}
      render={(control) => (
        <>
          <AuthFormItem control={control} name="email">
            <ControlInput
              label="아이디(이메일)"
              name="email"
              control={control}
              placeholder={PLACEHOLDER.email}
              rules={{
                validate: validateId,
              }}
            />
          </AuthFormItem>
          <PasswordInput control={control} name="password" />
        </>
      )}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
