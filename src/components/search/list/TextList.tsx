import Link from 'next/link';

import StarImg from '@/components/svg/ico_star.svg';

const List = () => {
  return (
    <>
      <ul>
        <li className="flex items-center border-solid border-b-[1px] border-gray-300">
          <Link
            href="/search/detail/goo"
            className="flex grow justify-start py-[20px]"
          >
            {/* <Image
              src=""
              alt=""
              className="inline-block w-[65px] h-[65px] mr-[12px] rounded-[20px] rounded-bl-[5px] bg-gray-200"
            /> */}
            <div className="text-left font-semibold">
              <strong className="mb-[8px] text-[18px] leading-[30px] font-semibold text-gray-900">
                이름
              </strong>
              <div className="flex mb-[6px] text-gray-700">
                <span>양식</span>
                <span className="flex items-center mx-[8px]">
                  <StarImg
                    width={14}
                    height={14}
                    alt="평점"
                    className="mr-[4px]"
                  />
                  4.5
                </span>
                <span className="pl-[8px] border-l-[1px] border-solid border-gray-300 text-gray-500">
                  리뷰 32개
                </span>
              </div>
              <div>
                <span className="px-[6px] py-[3px] bg-gray-100 text-gray-400 text-[12px]">
                  #파스타
                </span>
              </div>
            </div>
          </Link>
          <div className="w-[43px] ml-[10px] text-center">
            <button type="button">
              <span className="ico_pravel ico_like32_on">좋아요</span>
            </button>
            <span className="block text-gray-800 text-[11px] font-medium">
              도보 10분
            </span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default List;
