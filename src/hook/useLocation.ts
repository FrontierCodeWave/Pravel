import { useEffect, useRef } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import { addLocation } from '@/services/api/plan.api';
import { LocationRequest } from '@/types/location.type';
import { LocationData } from '@/types/search.type';

const useFetchLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: () => {
      return getLocation();
    },
  });
};

export const useLocation = () => {
  const location = useFetchLocation();
  const queryClient = useQueryClient();

  const updateLocation = (newLocation: LocationData) => {
    queryClient.setQueryData(['location'], newLocation);
  };

  return {
    updateLocation,
    ...location,
  };
};

export const useAddLocation = () => {
  return useMutation({
    mutationFn: (locationData: LocationRequest) => {
      return addLocation(locationData);
    },
  });
};

export default useFetchLocation;
