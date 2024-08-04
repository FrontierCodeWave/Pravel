import { useQuery } from '@tanstack/react-query';

import * as tourApi from '@/services/api/tour.api';

export function getLocation(): Promise<[number, number]> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve([position.coords.latitude, position.coords.longitude]),
        (error) => reject(error),
      );
    } else {
      reject(
        new Error(
          'Geolocation is not supported by this browser or environment.',
        ),
      );
    }
  });
}

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
