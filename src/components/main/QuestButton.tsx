'use client';

import { useState } from 'react';

import { useFetchQuestList } from '@/hook/useQuest';

const QuestButton = () => {
  const [enabled, setEnabled] = useState(false);
  const { data } = useFetchQuestList(enabled);

  return (
    <li className="relative shadow-[0_0_10px_0_#0000001A] mb-[8px] rounded-full">
      <button
        className="w-[56px] h-[56px] bg-primary text-white text-[36px] font-rajdhani rounded-full font-bold"
        onClick={() => setEnabled(true)}
      >
        Q
      </button>
      {enabled && (
        <ul className="absolute flex flex-col gap-[6px] top-[10px] -left-[14px] -translate-x-full">
          {data?.map((quest, i) => (
            <li
              key={quest.id}
              className="cursor-pointer bg-gray-900 w-[38px] h-[38px] text-white font-rajdhani rounded-full text-[20px] font-bold flex items-center justify-center"
            >
              {`Q${i + 1}`}
            </li>
          ))}

          <li className="cursor-pointer bg-gray-600 w-[38px] h-[38px] text-white font-rajdhani rounded-full text-[20px] font-bold flex items-center justify-center hover:bg-gray-700 transition-colors">
            <button className="w-full" onClick={() => setEnabled(false)}>
              X
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default QuestButton;
