'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import ControlInput from '@/components/auth/ControlInput';
import InputForm from '@/components/form/InputForm';
import { useLogin } from '@/hook/useAuth';
import { ERROR_MESSAGE, PLACEHOLDER } from '@/lib/const/auth-message';
import { LoginForm as LoginFormType } from '@/types/auth.type';

import Button from '../button/Button';

import PasswordInput from './input/PasswordInput';
import AuthFormItem from './AuthFormItem';

const data: LoginFormType = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const login = useLogin();
  const router = useRouter();

  const onSubmit = useCallback(
    async (form: LoginFormType) => {
      try {
        await login.mutateAsync(form);
        router.push('/');
      } catch {}
    },
    [login, router],
  );

  return (
    <InputForm
      data={data}
      buttons={
        <>
          <Button type="submit">로그인</Button>
        </>
      }
      render={(control) => (
        <>
          <AuthFormItem control={control} name="email">
            <ControlInput
              label="아이디(이메일)"
              name="email"
              control={control}
              placeholder={PLACEHOLDER.email}
              rules={{
                validate: (value) => {
                  if (!value.trim()) {
                    return ERROR_MESSAGE.required.email;
                  }

                  if (value.includes(' ')) {
                    return ERROR_MESSAGE.empty;
                  }

                  if (
                    !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/g.test(value)
                  ) {
                    return ERROR_MESSAGE.reg.email;
                  }

                  return undefined;
                },
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
