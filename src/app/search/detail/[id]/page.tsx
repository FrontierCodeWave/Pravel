import InfoBox from '@/components/search/detail/box/InfoBox';
import ReviewBox from '@/components/search/detail/box/ReviewBox';
import TalkBox from '@/components/search/detail/box/TalkBox';
import UtilBox from '@/components/search/detail/box/UtilBox';

const DetailContent = () => {
  return (
    <div className="pt-[64px] pb-[92px]">
      <div className="relative">
        <img src="/img_dummy.png" alt="" className="object-cover bg-gray-700" />
        <button
          type="button"
          className="absolute bottom-[16px] right-[16px] w-[32px] h-[32px] p-[4px] bg-[#1A1E27B2] box-border rounded-full leading-[22px]"
        >
          <span className="ico_pravel ico_share24">공유하기</span>
        </button>
      </div>
      <InfoBox />
      <ReviewBox />
      <TalkBox />
      <UtilBox />
    </div>
  );
};

export default DetailContent;
