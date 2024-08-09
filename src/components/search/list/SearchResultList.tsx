'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ShowType from '@/components/search/list/ShowType';
import getLocation from '@/services/api/location.api';

import MapBox from '../../map/Map';

import TextList from './TextList';

const SearchResultList = () => {
  const showType = useSearchParams().get('type');
  const [location, setLocation] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLocation()
      .then((data) => {
        setLocation(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (!location) {
    return <p>위치를 탐색하고 있습니다...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <ShowType type={showType} />
      {showType === 'list' && (
        <span className="inline-block h-[27px] mb-[16px] text-[13px] leading-[27px] text-gray-600">
          1,000개의 매장
        </span>
      )}
      <strong className="screen_out">{showType} 리스트</strong>
      {showType === 'list' ? (
        <TextList />
      ) : (
        <MapBox lat={location[0]} lng={location[1]} />
      )}
    </>
  );
};

export default SearchResultList;
