'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useDuplicateId, useJoin } from '@/hook/useAuth';
import { ERROR_MESSAGE, PLACEHOLDER } from '@/lib/const/auth-message';
import { validateId, validateNickname } from '@/lib/validate/auth-validate';
import { JoinForm as JoinFormType } from '@/types/auth.type';

import Button from '../button/Button';
import FullLoadingSpinner from '../common/loading/FullLoadingSpinner';
import InputForm from '../form/InputForm';

import PasswordInput from './input/PasswordInput';
import AuthFormItem from './AuthFormItem';
import ControlInput from './ControlInput';

const data: JoinFormType = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirm: '',
};

const JoinForm = () => {
  const router = useRouter();
  const join = useJoin();
  const duplicateId = useDuplicateId();

  const [checkId, setCheckId] = useState(false);

  const onSubmit = useCallback(
    async (form: JoinFormType) => {
      try {
        if (!checkId) {
          alert(ERROR_MESSAGE.checkId);
          return;
        }

        await join.mutateAsync(form);
        router.push('/login');
      } catch {}
    },
    [checkId, join, router],
  );

  const onDuplicateId = async (email: string) => {
    try {
      await duplicateId.mutateAsync(email);
      setCheckId(true);
    } catch {
      setCheckId(false);
    }
  };

  if (join.isPending) {
    return <FullLoadingSpinner />;
  }

  return (
    <InputForm
      data={data}
      buttons={
        <Button
          className="w-full h-[70px] disabled:opacity-50"
          type="submit"
          flex
        >
          회원가입
        </Button>
      }
      render={(control) => (
        <>
          <AuthFormItem control={control} name="nickname">
            <ControlInput
              label="닉네임"
              name="nickname"
              control={control}
              placeholder={PLACEHOLDER.nickname}
              rules={{
                validate: validateNickname,
              }}
            />
          </AuthFormItem>
          <AuthFormItem control={control} name="email">
            <div className="flex gap-2 flex-wrap items-end">
              <ControlInput
                label="아이디(이메일)"
                name="email"
                control={control}
                placeholder={PLACEHOLDER.email}
                rules={{
                  validate: validateId,
                }}
              />
              <button
                type="button"
                className="w-[83px] h-[36px] border-primary border-[1px] flex items-center justify-center rounded-full text-primary text-[13px] font-semibold"
                onClick={() => onDuplicateId(control._formValues.email)}
              >
                중복확인
              </button>
            </div>
          </AuthFormItem>

          <PasswordInput
            control={control}
            name="password"
            validate={(value) => {
              const { passwordConfirm } = control._formValues;

              if (passwordConfirm && value !== passwordConfirm) {
                control.setError('passwordConfirm', {
                  type: 'reg',
                  message: ERROR_MESSAGE.reg.passwordConfirm,
                });
              }

              return undefined;
            }}
          />
          <PasswordInput
            control={control}
            name="passwordConfirm"
            validate={(value) => {
              if (value !== control._formValues.password) {
                return ERROR_MESSAGE.reg.passwordConfirm;
              }

              return undefined;
            }}
          />
        </>
      )}
      onSubmit={onSubmit}
    />
  );
};

export default JoinForm;
