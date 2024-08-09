// import { useState } from 'react';
import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import MapCard from '../search/card/MapCard';

import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

interface Props {
  lat: number;
  lng: number;
}

const dummyData = [
  {
    lat: 37.57394507834653,
    lng: 126.97792589664459,
    type: 'restaurant',
    txt: '비스트로',
    star: 4.3,
  },
  {
    lat: 37.57324992855816,
    lng: 126.97798001826321,
    type: 'cafe',
    txt: '베이커리 카페',
    star: 4.0,
  },
  {
    lat: 37.572393205978244,
    lng: 126.97690665721893,
    type: 'ramen',
    txt: '라멘라멘',
    star: 4.0,
  },
  {
    lat: 37.57252926183535,
    lng: 126.9756406545639,
    type: 'food',
    txt: '고깃집',
    star: 4.2,
  },
  {
    lat: 37.57356242788971,
    lng: 126.97505056858063,
    type: 'food',
    txt: '한식',
    star: 4.1,
  },
];

const MapBox = ({ lat, lng }: Props) => {
  const [isOpen, setIsOpen] = useState(false); // [참고] 해당 상태는 추후에 아래 상태로 변경해서 사용할 예정 코드리뷰시 마크업 확인을 위한 용도로 생성함!
  // const [clickedMarker, setClickedMarker] = useState<string | null>(null);

  // const handleClickMarker = (marker: string) => {
  //   setClickedMarker(marker);
  // };
  console.log(lat, lng);
  return (
    <div className="mb-[25px]">
      <Map
        center={{ lat: 37.57285664522282, lng: 126.97689056396484 }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
      >
        <MarkerCurrent
          lat={37.57285664522282}
          lng={126.97689056396484}
          // color={clickedMarker ? '#0BC58D' : '#FF9040'}
          color="#0BC58D"
        />
        {dummyData.map((marker) => (
          <MarkerPlace
            key={marker.txt}
            type={marker.type}
            color={'#FFF'}
            lat={marker.lat}
            lng={marker.lng}
            onMarkerPlaceClick={() => setIsOpen((prev) => !prev)}
          />
        ))}
        {isOpen && <MapCard />}
      </Map>
    </div>
  );
};

export default MapBox;
