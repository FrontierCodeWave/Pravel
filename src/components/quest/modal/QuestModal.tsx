'use client';

import { Bounce, toast } from 'react-toastify';
import Image from 'next/image';

import ModalBackdrop from '@/components/mypage/modal/ModalBackdrop';
import { useFetchQuest, useStartQuestMutation } from '@/hook/useQuest';
import { usePlanStateStore } from '@/store';

interface QuestModalProps {
  id: number;
  close: () => void;
}

const QuestModal = ({ id }: QuestModalProps) => {
  const { data: quest, isLoading, isError } = useFetchQuest(id);
  const { currentDate, planId } = usePlanStateStore();
  const startQuestMutation = useStartQuestMutation();

  if (isLoading) return null;
  if (isError) {
    close();
    return null;
  }

  const handleStartQuest = () => {
    startQuestMutation.mutate({
      id,
      planId,
      date: currentDate,
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-dvh pt-[106px] z-50">
      <ModalBackdrop blur />

      <div className="max-w-[780px] w-full absolute left-1/2 -translate-x-1/2 flex justify-center flex-col z-30">
        <h1 className="text-white font-bold text-[34px] text-center font-rajdhani">
          Quest
        </h1>
        <p className="text-center mt-[25px]">
          <span className="text-white font-semibold leading-[19px]">
            <span className="text-primary">[{quest!.title}]</span>하고 기념품을
            받아보세요!
            <br /> 일정에 참여해 보실래요?
          </span>
        </p>

        <div className="max-w-[780px] px-[20px]">
          <div className="font-semibold mt-[35px] w-full h-[46px] bg-[rgba(11,197,141,0.2)] border-[1px] rounded-[5px] border-solid border-[rgba(11,197,141,0.3)] px-[20px] py-[11px] flex justify-between">
            <span className="text-white">퀘스트 보상</span>
            <span className="text-primary">
              <i className="ico_pravel ico_energy_fill24 mr-[4px]" />
              에너지 {quest!.energy}%
            </span>
          </div>
        </div>

        <div className="relative">
          <Image
            className="mx-auto"
            src="/quest/quest.png"
            width={385}
            height={385}
            alt="퀘스트 이미지"
          />
        </div>

        <div className="mt-[19px] flex justify-center gap-[8px]">
          <button className="w-[170px] h-[43px] bg-gray-200 rounded-[20px_20px_20px_12px] text-gray-600">
            별로예요
          </button>
          <button
            className="w-[170px] h-[43px] bg-primary rounded-[20px_20px_20px_12px] text-white"
            onClick={handleStartQuest}
          >
            참여하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestModal;
