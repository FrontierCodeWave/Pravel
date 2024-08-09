import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAuthorization } from '../services/api';
import * as authApi from '../services/api/auth.api';
import authKey from '../services/key/auth';
import { User } from '../types/auth.type';

export const useUser = () => {
  const queryClient = useQueryClient();
  const { email, token } = getAuthorization();

  const user = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [authKey.all, email],
    queryFn: () => authApi.fetchUser({ email, token }),
    staleTime: Infinity,
    enabled: !!email,
  });

  const updateUser = (newUser: User) => {
    queryClient.setQueryData([authKey.all, email], newUser);
  };

  const clearUser = () => {
    queryClient.removeQueries({ queryKey: [authKey.all] });
  };

  return {
    user,
    updateUser,
    clearUser,
  };
};

export const useLogout = () => {
  const { clearUser } = useUser();
  const auth = getAuthorization();

  return useMutation({
    mutationFn: () => authApi.logout(auth),

    onSuccess: () => {
      clearUser();
    },

    onError: (error) => {
      alert(error.message);
    },
  });
};

export const useJoin = () =>
  useMutation({
    mutationFn: authApi.join,

    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
    },

    onError: () => {
      alert('회원가입에 실패했습니다.');
    },
  });

export const useDuplicateId = () =>
  useMutation({
    mutationFn: authApi.duplicateId,

    onSuccess: () => {
      alert('사용 가능한 아이디입니다.');
    },

    onError: () => {
      alert('중복된 아이디입니다.');
    },
  });
