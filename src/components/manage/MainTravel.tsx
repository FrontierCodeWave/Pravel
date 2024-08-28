import Image from 'next/image';

const MainTravel = () => {
  return (
    <div className="relative before:contents-[''] before:block before:w-full before:h-[105px] before:absolute before:top-0 before:left-0 before:bg-primary">
      <div className="relative mx-[16px] overflow-hidden shadow-[0_4px_10px_0px_rgba(204,231,223,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:top before:left-0 before:bg-[#ffffffef] before:backdrop-blur-[20.7px] before:border-[1px] before:border-[#fff] before:rounded-[12px] ">
        <button className="flex items-center absolute top-[10px] right-[20px] z-20 before:contents-[''] before:block before:w-[24px] before:h-[24px] before:bg-[url('/img_pravel.png')] before:bg-[-168px_-96px] before:bg-[length:300px_300px] text-[12px] text-semibold text-gray-700">
          수정하기
        </button>

        <div className="relative z-10 mt-[30px] flex justify-center items-end">
          <Image
            src="/test1.jpg"
            alt="test"
            width={160}
            height={160}
            className="rounded-[5px_5px_45px_5px]"
          />
          <button className="ico_pravel ico_change24 ml-[-4px]">
            이미지 수정하기
          </button>
        </div>
        <ul className="relative z-10 w-[225px] mt-[25px] mb-[30px] mx-[auto]">
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] font-normal text-gray-800">
              장소
            </strong>
            제주도
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] font-normal text-gray-800">
              날짜
            </strong>
            2023.05.04 - 2023.05.08
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] font-normal text-gray-800">
              시작-끝
            </strong>
            In 제주공항 - Out 제주공항
          </li>
          <li className="flex gap-[20px] text-[14px] text-gray-600">
            <strong className="basis-[43px] font-normal text-gray-800">
              인원
            </strong>
            성인2명
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTravel;
