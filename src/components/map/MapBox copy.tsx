import { useEffect, useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import useLocalStorage from 'use-local-storage';

import useKakaoLoader from '@/hook/useKakaoLoader';
import useFetchLocation from '@/hook/useLocation';
import getLocation from '@/services/api/location.api';
import { ListData, LocationData } from '@/types/search.type';

import FullLoadingSpinner from '../common/loading/FullLoadingSpinner';

import MapCard from './card/MapCard';
import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

interface MapBoxProps {
  tab: string;
  list: ListData[];
  isFetching: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult>;
  hasNextPage: boolean;
  onClickRefetch: (lat: number, lng: number) => void;
}
const LoadingComponent = () => <FullLoadingSpinner />;

const MapBox = ({
  tab,
  list,
  isFetching,
  hasNextPage,
  fetchNextPage,
  onClickRefetch,
}: MapBoxProps) => {
  const [isMapFetchError] = useKakaoLoader();
  const { data: location, isError: locationFetchError } = useFetchLocation();
  const [draggedLocation, setDraggedLocation] = useLocalStorage<
    LocationData | undefined
  >('draggedLocation', location);

  useEffect(() => {
    if (draggedLocation) return;
    if (location) {
      setDraggedLocation(location);
    }
  }, [location]);

  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);
  const [newSearch, setNewSearch] = useState({
    isDragged: false,
    pageNo: 0,
  });

  if (locationFetchError) return <p>위치 정보를 가져오는데 실패했습니다.</p>;
  if (isMapFetchError) return <p>지도를 불러오는데 실패했습니다.</p>;
  if (!draggedLocation) return LoadingComponent();

  const handleClickMarker = (cardInfo: ListData) => {
    setClickedMarker((prev) => {
      if (prev?.contentId === cardInfo.contentId) {
        return null;
      } else {
        return cardInfo;
      }
    });
  };

  const handleMapClick = () => {
    setClickedMarker(null);
  };

  const handleClickResearch = () => {
    if (newSearch.pageNo === 0) {
      onClickRefetch(draggedLocation.lat, draggedLocation.lng);
    } else {
      fetchNextPage();
    }
    setNewSearch((prev) => {
      return {
        isDragged: true,
        pageNo: prev.pageNo + 1,
      };
    });
  }

  const handleClickRefresh = async () => {
    const { lat, lng } = await getLocation();

    onClickRefetch(lat, lng);
    setDraggedLocation({ lat, lng });
    setNewSearch({
      isDragged: false,
      pageNo: 0,
    });
  }

  return (
    <div className="relative">
      {newSearch.isDragged && (
        <button
          type="button"
          disabled={!hasNextPage}
          className={`absolute z-[20] top-[10px] left-[50%] px-[10px] py-[8px] translate-x-[-50%] bg-white border border-gray-500 rounded-[25px] ${newSearch.pageNo === 5 ? 'text-gray-500' : 'text-gray-800'}`}
          onClick={handleClickResearch}
        >
          {newSearch.pageNo > 0
            ? `결과 더보기 ${newSearch.pageNo}/5`
            : '이지역 재검색'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block ml-[4px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      )}
      <Map
        center={{ lat: draggedLocation.lat, lng: draggedLocation.lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
        onClick={handleMapClick}
        draggable={true}
        level={4}
        onDragEnd={(map) => {
          const latlng = map.getCenter();

          setNewSearch({
            isDragged: true,
            pageNo: 0,
          });
          setDraggedLocation({ lat: latlng.getLat(), lng: latlng.getLng() });
        }}
      >
        <MarkerCurrent
          lat={draggedLocation.lat}
          lng={draggedLocation.lng}
          color={clickedMarker ? '#FF9040' : '#0BC58D'}
        />
        {isFetching ? (
          LoadingComponent()
        ) : (
          <MarkerClusterer
            averageCenter={true}
            minLevel={6}
            styles={[
              {
                minWidth: '30px',
                minHeight: '30px',
                color: 'rgb(255, 255, 255)',
                fontSize: '12px',
                lineHeight: '30px',
                textAlign: 'center',
                borderRadius: '50%',
                backgroundColor: '#0BC58D',
                opacity: 0.7,
              },
            ]}
          >
            {list.map((marker) => (
              <MarkerPlace
                key={marker.contentId}
                contentId={marker.contentId}
                category={marker.category}
                color={
                  clickedMarker?.contentId === marker.contentId
                    ? '#0BC58D'
                    : '#FFF'
                }
                title={marker.title}
                lat={marker.lon as number}
                lng={marker.lat as number}
                onMarkerPlaceClick={() => handleClickMarker(marker)}
              />
            ))}
          </MarkerClusterer>
        )}
        {clickedMarker && <MapCard item={clickedMarker} tab={tab} />}
      </Map>
      <button
        type="button"
        className="absolute z-[20] bottom-[30px] right-[10px] p-[10px] bg-white rounded-[50%]"
        onClick={handleClickRefresh}
      >
        <svg
          className="h-8 w-8 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <circle cx="12" cy="12" r="9" />{' '}
          <line x1="12" y1="3" x2="12" y2="7" />{' '}
          <line x1="12" y1="21" x2="12" y2="18" />{' '}
          <line x1="3" y1="12" x2="7" y2="12" />{' '}
          <line x1="21" y1="12" x2="18" y2="12" />{' '}
          <line x1="12" y1="12" x2="12" y2="12.01" />
        </svg>
      </button>
    </div>
  );
};

export default MapBox;
