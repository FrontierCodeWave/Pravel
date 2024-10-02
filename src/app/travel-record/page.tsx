import Image from 'next/image';

import SwiperCarousel from '@/components/common/carousel/SwiperCarousel';
import TravelList from '@/components/record/TravelList';
import Gnb from '@/layout/navigation/Gnb';
import {
  getPlanCount,
  getPlanHistoryList,
  getRecommandPlanList,
} from '@/lib/actions/plan-action';
import { getUser } from '@/lib/auth';

const TravelRecord = async () => {
  const { nickname } = await getUser();
  const count = await getPlanCount();
  const list = await getRecommandPlanList();
  const historyList = await getPlanHistoryList();

  return (
    <div className="h-full">
      <h1 className="font-bold text-[26px] text-center pt-[40px]">
        <span className="text-primary">{nickname}</span>
        <span>님의 여행기록</span>
      </h1>
      <div className="text-center">
        <p className="flex gap-2 justify-center mt-[12px]">
          <span className="text-primary font-bold font-rajdhani">Lv.1</span>
          <span className="font-semibold text-gray-700">즉흥적인 여행가</span>
        </p>
        <p className="font-semibold text-gray-500">
          {nickname}님은 올해 {count}번 여행하셨어요!
        </p>
      </div>
      <div className="mt-[24px]">
        {list.length ? (
          <SwiperCarousel data={list} />
        ) : (
          <div className="mx-auto flex flex-col justify-center items-center w-[246px] h-[362px] bg-gray-200 rounded-[25px]">
            <Image
              className="mx-auto"
              src="/record/travel/default.png"
              width={130}
              height={130}
              alt="default"
            />
            <p className="mt-[4px] font-semibold text-gray-500">
              여행 기록이 없어요 :(
            </p>
          </div>
        )}
      </div>
      <div className="h-[9px] bg-gray-200 mt-[40px]"></div>
      <div className="mt-[40px] px-[16px] pb-[112px]">
        <TravelList list={historyList} />
      </div>
      <Gnb />
    </div>
  );
};

export default TravelRecord;
