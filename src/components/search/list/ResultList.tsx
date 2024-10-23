'use client';

import MapBox from '../../map/MapBox';

interface ResultListProps {
  tab: string;
  type: string;
  filters: string;
}

const ResultList = ({ tab, filters }: ResultListProps) => {
  return <MapBox key={tab} tab={tab} filters={filters} />;
};

export default ResultList;
