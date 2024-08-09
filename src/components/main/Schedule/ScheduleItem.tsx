import Image from 'next/image';

import dummy from './dummy_schedule.json';

import styles from './Schedule.module.css';

const ScheduleItem = ({ schedule }: { schedule: (typeof dummy)['0'] }) => {
  const categoryClass =
    schedule.category === '식당'
      ? styles.category_restaurant
      : styles.category_sightseeing;

  return (
    <div className={`${styles.schedule_item} flex gap-[16px] mt-[68px]`}>
      <div>
        <div className="inline-block rounded-[30px_30px_30px_10px] overflow-hidden">
          <Image
            src={`/${schedule.img}`}
            alt="test"
            width={100}
            height={100}
            sizes="100px"
          />
        </div>
        <button className="blind">일정 삭제하기</button>
      </div>

      <div
        className={`flex flex-col text-[0px] items-start ${styles.schedule_info}`}
      >
        <span className={`${styles.category} ${categoryClass}`}>
          {schedule.category}
        </span>
        <h4 className="text-gray-900 text-[18px] font-semibold my-[6px] leading-[1.16]">
          {schedule.title}
        </h4>
        <p className="mb-[4px] text-gray-500 text-[13px] font-semibold">
          {schedule.description}
        </p>
        <button className="flex text-primary text-[13px] font-semibold before:content[''] before:inline-block before:w-[18px] before:h-[18px] before:bg-[url('/img_pravel.png')] before:bg-[-104px_-208px] before:bg-[length:300px_300px]">
          리뷰쓰기
        </button>
      </div>
    </div>
  );
};

export default ScheduleItem;
