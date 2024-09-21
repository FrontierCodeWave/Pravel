import { memo } from 'react';

import Button from '@/components/button/Button';
import LikeImg from '@/components/svg/ico_like.svg';
import LikedImg from '@/components/svg/ico_wish.svg';

interface ButtonBoxProps {
  like: boolean;
}

const ButtonBox = ({ like }: ButtonBoxProps) => {
  return (
    <div className="z-10 fixed left-[50%] bottom-0 w-full max-w-[790px] min-w-[390px] px-[16px] py-[20px] border-t-[1px] border-gray-200 translate-x-[-50%] box-border bg-white">
      <button type="button" className="inline-block mr-[16px] align-middle">
        {like ? (
          <LikedImg width={46} height={46} alt="위시리스트 추가됨" />
        ) : (
          <LikeImg width={46} height={46} alt="위시리스트 추가하기" />
        )}
      </button>
      <Button className="rounded-[12px] text-[16px] w-[calc(100%-62px)] h-[52px]">
        장소 추가
      </Button>
    </div>
  );
};

export default memo(ButtonBox);
