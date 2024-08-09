'use server';

import { redirect } from 'next/navigation';

import { login } from '@/services/api/auth.api';
import { LoginForm } from '@/types/auth.type';

import { createAuthSession } from '../auth';

const loginAction = async (_: boolean, form: LoginForm) => {
  let error = false;

  try {
    const response = await login(form);

    createAuthSession(response.user, response.token);
    redirect('/');
  } catch {
    error = true;
  }

  return error;
};

export default loginAction;
