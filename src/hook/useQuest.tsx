import { useQuery, useQueryClient } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import { getQuestList } from '@/services/api/quest.api';
import { LocationData } from '@/types/search.type';

export const useFetchQuestList = (enabled: boolean) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['quest'],
    queryFn: async () => {
      let location = queryClient.getQueryData(['location']) as LocationData;

      if (!location) {
        location = await getLocation();
      }

      return getQuestList(location);
    },
    staleTime: 5 * 3_600 * 1000,
    enabled,
  });
};
