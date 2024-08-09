import ReviewSwiper from '../swiper/ReviewSwiper';

import style from './box.module.css';

const ReviewBox = () => {
  return (
    <div className={style.box_detail}>
      <strong className={style.tit_detail}>:P의 리뷰</strong>
      <div className="flex justify-start items-center mb-[20px]">
        <strong className="mr-[12px] pr-[12px] border-r-[1px] border-gray-300 font-semibold text-[15px] text-gray-600 whitespace-nowrap">
          리뷰 32개
        </strong>
        <ul className="flex justify-start gap-[4px] overflow-x-auto scrollbar-hide">
          <li>
            <button type="button" className="tag_bd_gray">
              #타코맛집
            </button>
          </li>
          <li>
            <button type="button" className="tag_bd_gray">
              #바다뷰
            </button>
          </li>
          <li>
            <button type="button" className="tag_bd_gray">
              #빠네
            </button>
          </li>
          <li>
            <button type="button" className="tag_bd_gray">
              #청결한 매장
            </button>
          </li>
        </ul>
      </div>
      <strong className="screen_out">리뷰 목록</strong>
      <ReviewSwiper />
      <button type="button" className="btn_bg_black">
        리뷰 더보기
      </button>
    </div>
  );
};

export default ReviewBox;
