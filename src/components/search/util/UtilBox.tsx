import { TabCategory } from '@/types/search.type';

import FilterTagList from '../list/FilterTagList';

import ShowTypeBox from './ShowTypeBox';

interface UtilBoxProps {
  tab: string;
  type: string;
  filterList: string[] | [];
}

const UtilBox = ({ tab, type, filterList }: UtilBoxProps) => {
  const taglist =
    tab === TabCategory.food
      ? [
          { id: 'all', text: '전체' },
          { id: 'korean', text: '한식' },
          { id: 'western', text: '양식' },
          { id: 'japanese', text: '일식' },
          { id: 'chinese', text: '중식' },
          { id: 'cafe', text: '카페' },
          { id: 'etc', text: '기타' },
        ]
      : [
          {
            id: 'all',
            text: '전체',
          },
        ];

  return (
    <div className="flex py-[16px]">
      <ShowTypeBox />
      <FilterTagList
        tab={tab}
        type={type}
        filterList={filterList}
        taglist={taglist}
      />
    </div>
  );
};

export default UtilBox;
