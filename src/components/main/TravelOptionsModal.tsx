import Link from 'next/link';

const TravelOptionsModal = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full pt-[10px] pb-[41px] z-10 bg-white">
      <button className="blind block before:content-[''] before:block before:w-[64px] before:h-[4px] before:bg-gray-300">
        하단으로 모달창 내리기
      </button>
      <div>
        <div className="flex px-[40px] gap-[14px] items-stretch">
          <button className="relative w-1/2 bg-gray-100 border border-gray-300 rounded-[20px] pt-[30px] pb-[24px] before:content-[''] before:block before:w-[56px] before:h-[56px] before:bg-[url('/img_pravel.png')] before:bg-[-112px_-128px] before:bg-[length:250px_250px] before:m-[0_auto]">
            <span className="absolute top-[10px]">
              New
              <span>3</span>
            </span>
            <span className="block pt-[19px]">나의 위시리스트</span>
          </button>

          <Link
            href="/search"
            className="w-1/2 bg-gray-100 border border-gray-300 rounded-[20px] pt-[30px] pb-[24px] before:content-[''] before:block before:w-[56px] before:h-[56px] before:bg-[url('/img_pravel.png')] before:bg-[-112px_-128px] before:bg-[length:250px_250px] before:m-[0_auto]"
          >
            <span className="block pt-[19px]">장소 탐색하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelOptionsModal;
