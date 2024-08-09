'use client';

import { useMemo } from 'react';
import { CustomOverlayMap, MapMarker, Marker } from 'react-kakao-maps-sdk';

import {
  CafeMarkerString,
  FoodMarkerString,
  MarkerPlaceImage,
  RamenMarkerString,
  RestaurantMarkerString,
} from '../../../lib/const/markers';

import style from '../map.module.css';

interface Props {
  type: string;
  color: string;
  lat: number;
  lng: number;
  onMarkerPlaceClick: (marker: Marker) => void;
}
interface MarkerImage {
  src: string;
  size: {
    width: number;
    height: number;
  };
  options?: {
    offset: {
      x: number;
      y: number;
    };
  };
}

type MarkerImages = {
  [key: string]: MarkerImage;
};

const MarkerPlace = ({ type, color, lat, lng, onMarkerPlaceClick }: Props) => {
  const markerImages = useMemo(() => {
    return {
      food: MarkerPlaceImage(FoodMarkerString(color)),
      cafe: MarkerPlaceImage(CafeMarkerString(color)),
      ramen: MarkerPlaceImage(RamenMarkerString(color)),
      restaurant: MarkerPlaceImage(RestaurantMarkerString(color)),
    } as MarkerImages;
  }, [color]);

  return (
    <>
      <MapMarker
        position={{ lat, lng }} // 나중에 변수로 변경해야함
        clickable={true}
        image={markerImages[type]}
        onClick={onMarkerPlaceClick}
      />
      <CustomOverlayMap
        position={{ lat, lng }} // 나중에 변수로 변경해야함
        xAnchor={0.5}
        yAnchor={-1.25}
        zIndex={-1}
      >
        <div>
          <span className={style.txt_marker}>한식당</span>
        </div>
      </CustomOverlayMap>
    </>
  );
};

export default MarkerPlace;
