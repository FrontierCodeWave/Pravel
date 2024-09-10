import Image from 'next/image';
import Link from 'next/link';

import { Plan } from '@/types/plan.type';

interface TravelItemProps extends Plan {}

const TravelItem = ({
  id,
  url,
  startDate,
  endDate,
  title,
}: TravelItemProps) => (
  <Link
    className="flex items-center justify-between"
    href={`/travel-record/${id}`}
  >
    <div className="flex gap-4">
      <div className="relative">
        <Image
          src={`/record/travel/thumnail/${url}`}
          alt="travel-record"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <p className="font-bold text-[#424242] text-[18px]">{title}</p>
        <p className="font-semibold text-gray-500 text-[14px] font-rajdhani">
          {startDate} ~ {endDate}
        </p>
      </div>
    </div>
    <div className="w-[26px] h-[26px] bg-gray-200 rounded-[7px] text-center">
      <i className="ico_pravel ico_black_arrow16" />
    </div>
  </Link>
);

interface TravelListProps {
  list: Plan[];
}

const TravelList = ({ list }: TravelListProps) => {
  return (
    <>
      <h3 className="font-semibold text-gray-600">지난 여행</h3>
      <ul className="flex gap-[26px] flex-col mt-[30px]">
        {list.map((item, index) => (
          <li key={index}>
            <TravelItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TravelList;
