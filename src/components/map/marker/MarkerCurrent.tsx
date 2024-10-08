import { useMemo } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

import { CurrentMarkerString, MarkerCurrentImage } from '@/lib/const/markers';

interface MarkerCurrentProps {
  lat: number;
  lng: number;
  color: string;
}

const MarkerCurrent = ({ lat, lng, color }: MarkerCurrentProps) => {
  const svgString = useMemo(() => CurrentMarkerString(color), [color]);

  const markerImage = useMemo(() => MarkerCurrentImage(svgString), [svgString]);

  return (
    <>
      <MapMarker position={{ lat, lng }} image={markerImage} />
      <p className="screen_out">
        현재 위치는 위도 {lat}, 경도 {lng}에 위치하고 있습니다.
      </p>
    </>
  );
};

export default MarkerCurrent;
