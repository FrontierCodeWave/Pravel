'use client';

import { useRouter } from 'next/navigation';

interface Props {
  moveTo?: string;
}

const HeaderDetail = ({ moveTo }: Props) => {
  const router = useRouter();

  const handleClickPrevButton = () => {
    if (moveTo) {
      router.push(moveTo);
      return;
    }
    router.back();
  };

  return (
    <header className="z-10 fixed left-[50%] top-0 flex justify-between items-center w-full max-w-[780px] min-w-[390px] height-[24px] px-[16px] py-[20px] translate-x-[-50%] leading-[24px] bg-white">
      <button
        type="button"
        className="ico_pravel ico_prev24"
        onClick={handleClickPrevButton}
      >
        이전 페이지
      </button>
      <h2 className="font-medium">장소 탐색하기</h2>
      <button
        type="button"
        className="ico_pravel ico_close24"
        onClick={() => router.push('/')}
      >
        닫기
      </button>
    </header>
  );
};

export default HeaderDetail;
