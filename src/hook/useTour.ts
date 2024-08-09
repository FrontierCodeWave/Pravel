import { useQuery } from '@tanstack/react-query';

import * as tourApi from '@/services/api/tour.api';

export const useFetchTour = () => {
  return useQuery({
    queryKey: ['tour'],
    queryFn: async () => {
      // const geocoordinates = await getLocation();

      // return geocoordinates;
      return tourApi.fetchTour(126.981611, 37.568477);
    },
    // enabled: !!email,
  });
};

export default {};
