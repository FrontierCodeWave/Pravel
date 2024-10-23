import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { FOOD_FILTER } from '@/lib/const/search';
import * as searchApi from '@/services/api/search.api';
import { LocationData } from '@/types/search.type';

import useFetchLocation from './useLocation';

interface SearchListProps {
  lat?: number;
  lng?: number;
  tab: string;
}

export const useFetchSearchList = ({
  lat = 0,
  lng = 0,
  tab,
}: SearchListProps) => {
  return useInfiniteQuery({
    queryKey: ['search', lat, lng, tab],
    queryFn: async ({ pageParam = 1 }) => {
      let result;

      if (tab === 'food') {
        result = await searchApi.fetchFood({
          lat,
          lng,
          pageNo: pageParam,
        });
      } else {
        result = await searchApi.fetchTour({
          lat,
          lng,
          pageNo: pageParam,
        });
      }

      if (result.nextCursor === undefined) {
        if (pageParam < 5) result.nextCursor = (pageParam as number) + 1;
      }

      return result;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.list.length === 0) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    initialPageParam: 1,
    gcTime: 20 * 60 * 1000,
    staleTime: 20 * 60 * 1000,
    enabled: !!(lat && lng),
  });
};

export const useKeywordList = ({
  filters,
  tab,
}: {
  filters?: string;
  tab: string;
}) => {
  const first = useRef(false);
  const currentLocation = useFetchLocation();
  const [location, setLocation] = useState<LocationData>();

  const searchList = useFetchSearchList({
    ...location,
    tab,
  });

  useEffect(() => {
    if (first.current || !currentLocation.data) return;

    setLocation({
      lat: currentLocation.data.lat,
      lng: currentLocation.data.lng,
    });

    first.current = true;
  }, [currentLocation, setLocation]);

  if (searchList.isFetching || !searchList.data) {
    return {
      ...searchList,
      data: undefined,
      fetchData: setLocation,
    };
  }

  const filterList = filters?.split(',');
  const allItems = searchList.data.pages.flatMap((page) => page.list) || [];
  const totalCount = searchList.data.pages[0]?.totalCount || 0;

  const newList = allItems.filter((item) => {
    if (filterList?.includes('all')) return true;
    else
      return filterList?.includes(
        FOOD_FILTER[item.category as keyof typeof FOOD_FILTER],
      );
  });

  return {
    ...searchList,
    data: newList,
    totalCount,
    fetchData: setLocation,
  };
};

export const useFetchKeywordList = (keyword: string) => {
  return useQuery({
    queryKey: ['search', keyword],
    queryFn: () => {
      return searchApi.fetchKeywordList(keyword);
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default {};
