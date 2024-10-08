'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';

import { signIn, signOut } from '@/auth';
import { setToast } from '@/components/common/toaster/ToasterProvider';
import * as authApi from '@/services/api/auth.api';
import { LoginForm } from '@/types/auth.type';

import { ERROR_MESSAGE } from '../const/auth-message';
import ApiError from '../error/ApiError';
import { validateNickname, validatePassword } from '../validate/auth-validate';

export interface LoginActionProps {
  redirect: boolean;
  error: boolean;
}

export const loginAction = async (_: LoginActionProps, form: LoginForm) => {
  const props: LoginActionProps = {
    redirect: false,
    error: false,
  };

  try {
    await signIn('credentials', {
      ...form,
      redirect: false,
    });
  } catch (e) {
    if ((e as AuthError)?.cause?.err as ApiError) {
      props.error = true;
      return props;
    }

    throw new Error('문제가 발생하였습니다.');
  }

  return redirect('/');
};

export const logoutAction = async () => {
  await signOut();
  redirect('/login');
};

export const updateUserAction = async (_: string, form: FormData) => {
  const nickname = form.get('nickname')?.toString();
  const result = validateNickname(nickname);

  if (result !== true) return result;

  try {
    const profileName = (form.get('profile') as File).name;

    if (!profileName || profileName === 'undefined') {
      form.delete('profile');
    }

    await authApi.updateUser(form);
  } catch (e) {
    if ((e as { code: number })?.code === 400) {
      return ERROR_MESSAGE.reg.nickname;
    }

    throw new Error('문제가 발생하였습니다.');
  }

  setToast({ type: 'success', message: '유저정보가 변경되었습니다.' });
  revalidateTag('user');
  return redirect('/mypage');
};

interface PasswordError {
  current: string;
  new: string;
}

export const updatePasswordAction = async (
  error: PasswordError,
  form: FormData,
): Promise<PasswordError> => {
  const password = form.get('password')?.toString();
  const newPassword = form.get('new-password')?.toString();

  let result = validatePassword(password);

  if (result !== true) {
    return {
      ...error,
      current: result,
    };
  }

  const response = await authApi.checkPassword(password!);

  if (!response) {
    return {
      ...error,
      current: '비밀번호가 일치하지 않습니다.',
    };
  }

  result = validatePassword(newPassword);

  if (result !== true) {
    return {
      current: '',
      new: result,
    };
  }

  try {
    await authApi.updatePassword(newPassword!);
  } catch (e) {
    if ((e as { code: number })?.code === 400) {
      return {
        ...error,
        new: ERROR_MESSAGE.reg.nickname,
      };
    }

    throw new Error('문제가 발생하였습니다.');
  }

  setToast({ type: 'success', message: '비밀번호가 변경되었습니다.' });
  return redirect('/mypage');
};
