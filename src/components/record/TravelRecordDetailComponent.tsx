import Image from 'next/image';
import Link from 'next/link';

import { Plan } from '@/types/plan.type';

interface TravelRecordDetailProps extends Plan {}

const TravelRecordDetailComponent = ({
  url,
  title,
  startDate,
  endDate,
}: TravelRecordDetailProps) => {
  return (
    <div className="pt-10 px-4">
      <div>
        <Link className="absolute" href="/travel-record">
          <i className="ico_pravel ico_left_black_arrow24" />
        </Link>
        <h1 className="font-semibold text-[18px] text-gray-900 flex items-center justify-center">
          <i className="ico_pravel ico_black_marker24" />
          {title}
        </h1>
        <p className="font-rajdhani text-[14px] text-center font-semibold mt-1 text-gray-700">
          {startDate} ~ {endDate}
        </p>
      </div>
      <div className="flex justify-center mt-[29px]">
        <Image
          src={`/record/travel/${url}`}
          width={246}
          height={362}
          alt="travel-record"
        />
      </div>
      <div className="mt-10">
        <h2 className="font-semibold text-gray-600">여행 발자취</h2>
      </div>
    </div>
  );
};

export default TravelRecordDetailComponent;
