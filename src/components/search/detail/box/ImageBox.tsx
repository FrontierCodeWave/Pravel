import { memo } from 'react';
import Image from 'next/image';

import DefaultImg from '@/components/common/empty/DefaultImg';

interface ImageBoxProps {
  thumbnail: string;
  setShareLinkOpen: () => void;
}

const ImageBox = ({ thumbnail, setShareLinkOpen }: ImageBoxProps) => {
  return (
    <div className="relative before:relative before:z-[-1] before:content-[''] before:block before:w-full before:h-0 before:pt-[59%] max-h-[460px]">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt=""
          className="object-cover bg-gray-700"
          fill
          sizes="80vw"
          priority
        />
      ) : (
        <DefaultImg
          addClass="absolute left-0 top-0 w-full h-full"
          logoWidth={100}
          logoHeight={100}
        />
      )}
      <button
        type="button"
        className="absolute bottom-[16px] right-[16px] w-[32px] h-[32px] p-[4px] bg-[#1A1E27B2] box-border rounded-full leading-[22px]"
        onClick={setShareLinkOpen}
      >
        <span className="ico_pravel ico_share24">공유하기</span>
      </button>
    </div>
  );
};

export default memo(ImageBox);
