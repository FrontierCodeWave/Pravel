'use client';

import { useState } from 'react';

import getDates from '@/utils/getDates';

const DateHeader: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handlePrevDate = (): void => {
    const prevDate: Date = new Date(currentDate);

    prevDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  const handleNextDate = (): void => {
    const nextDate: Date = new Date(currentDate);

    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };
  const formattedDate = getDates(currentDate);
  // const formattedString: string = `${formattedDate.month}월 ${formattedDate.day}일 ${formattedDate.dayOfWeek}`;

  return (
    <article
      className="relative h-[80px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[53px] before:bg-primary
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[26px] after:bg-gray-100 after:z-[-1]
    "
    >
      <div className="mx-[16px] overflow-hidden rounded-[12px] relative shadow-[0_4px_10px_0px_rgba(204,231,223,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#ffffffef] before:backdrop-blur-[20.7px] before:border-[1px] before:border-[#fff] before:rounded-[12px] h-[80px]">
        <div
          className={`w-full h-full relative z-[2] flex item-center justify-center text-center`}
        >
          <h2 className="relative z-10 flex flex-col justify-center">
            <strong className="block font-semibold text-primary">Day1</strong>
            <span className="text-[20px] font-semibold">
              {`${formattedDate.month}월 ${formattedDate.day}일 ${formattedDate.dayOfWeek}`}
            </span>
          </h2>
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-[20px] ">
            <button onClick={handlePrevDate} className="ico_pravel ico_prev32">
              이전 날짜
            </button>
            <button onClick={handleNextDate} className="ico_pravel ico_next32">
              다음 날짜
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DateHeader;
