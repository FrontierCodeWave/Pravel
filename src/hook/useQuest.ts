import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import * as questApi from '@/services/api/quest.api';
import { LocationData } from '@/types/search.type';
import { boundToast } from '@/utils/toastUtils';

export const useFetchQuestList = (enabled: boolean) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['quest'],
    queryFn: async () => {
      let location = queryClient.getQueryData(['location']) as LocationData;

      if (!location) {
        location = await getLocation();
      }

      return questApi.getQuestList(location);
    },
    staleTime: 5 * 3_600 * 1000,
    enabled,
  });
};

export const useFetchQuest = (questId: number) =>
  useQuery({
    queryKey: ['quest', questId],
    queryFn: async () => {
      return questApi.getQuest(questId);
    },
  });

export const useStartQuestMutation = () =>
  useMutation({
    mutationFn: questApi.startQuest,

    onSuccess() {
      boundToast('추가되었습니다');
    },

    onError() {
      boundToast('퀘스트를 시작할 수 없습니다.', 'warning');
    },
  });
