import { useMutation, useQuery } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import { addLocation } from '@/services/api/plan.api';
import { LocationRequest } from '@/types/location.type';

const useFetchLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: () => {
      return getLocation();
    },
  });
};

export const useAddLocation = () => {
  return useMutation({
    mutationFn: (locationData: LocationRequest) => {
      return addLocation(locationData);
    },
  });
};

export default useFetchLocation;
