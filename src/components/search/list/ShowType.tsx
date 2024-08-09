'use client';

import { usePathname, useRouter } from 'next/navigation';

interface Props {
  type: string | null;
}

const ShowTypeList = ({ type }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-start py-[16px]">
      <div className="inline-block mr-[14px]">
        <h4 className="screen_out">보기 방식 선택</h4>
        <button
          type="button"
          className={`ico_pravel ico_map${type === 'map' ? '_on' : ''}`}
          onClick={() => router.replace(`${pathname}/?type=map`)}
        >
          지도로 보기
        </button>
        <button
          type="button"
          className={`ico_pravel ico_list${type === 'list' ? '_on' : ''} ml-[10px]`}
          onClick={() => router.replace(`${pathname}/?type=list`)}
        >
          리스트로 보기
        </button>
      </div>
      {/* <TagList list={TAGLIST[currentTab] || TAGLIST['food']}/> */}
    </div>
  );
};

export default ShowTypeList;
