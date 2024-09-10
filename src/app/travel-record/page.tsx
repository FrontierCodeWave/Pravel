import Image from 'next/image';

import Carousel, { CarouselItem } from '@/components/common/carousel/Carousel';
import TravelList from '@/components/record/TravelList';
import Gnb from '@/layout/navigation/Gnb';
import {
  getPlanHistoryList,
  getRecommandPlanList,
} from '@/lib/actions/plan-action';
import { getUser } from '@/lib/auth';

const TravelRecord = async () => {
  const { nickname } = await getUser();
  const list = await getRecommandPlanList();
  const historyList = await getPlanHistoryList();
  const data = {
    count: 6,
    level: 3,
    list,
  };

  return (
    <div className="h-full">
      <h1 className="font-bold text-[26px] text-center pt-10">
        <span className="text-primary">{nickname}</span>
        <span>님의 여행기록</span>
      </h1>
      <div className="text-center">
        <p className="flex gap-2 justify-center mt-3">
          <span className="text-primary font-bold font-rajdhani">
            Lv.{data.level}
          </span>
          <span className="font-semibold text-gray-700">즉흥적인 여행가</span>
        </p>
        <p className="font-semibold text-gray-500">
          {nickname}님은 올해 {data.count}번 여행하셨어요!
        </p>
      </div>
      <div className="mt-6">
        <Carousel options={{ loop: true }}>
          {list.map(({ id, url }) => (
            <CarouselItem key={id}>
              <Image
                src={`/record/travel/${url}`}
                alt="travel"
                width={246}
                height={200}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <div className="h-[9px] bg-gray-200 mt-10"></div>
      <div className="mt-10 px-4 pb-28">
        <TravelList list={historyList} />
      </div>
      <Gnb />
    </div>
  );
};

export default TravelRecord;
