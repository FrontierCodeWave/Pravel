'use client';

import { useRef } from 'react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

const ReviewSwiper = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="relative pb-[68px]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={16}
        slidesPerView={'auto'}
        modules={[Pagination]}
        className="reviewSwiper"
        pagination={true}
        injectStyles={[
          `swiper-pagination-bullet{
              width: 8px;
              height: 8px;
              background-color: var(--gray-300)
            }
            swiper-pagination-bullet-active{
              background-color: red
            }
        `,
        ]}
      >
        <SwiperSlide>
          <div className="flex items-center mb-[10px] text-[16px]">
            <span className="w-[36px] h-[36px] mr-[16px] bg-gray-700 rounded-full">
              {/* <img src="" alt="" className="" /> */}
            </span>
            <span className="font-semibold">김여행</span>
            <span className="ml-auto font-medium text-gray-700">
              <span className="ico_pravel ico_star14 mr-[4px]">평점</span>
              4.5
            </span>
          </div>
          <div className="bg-gray-100 rounded-[12px]">
            <img
              src="/img_dummy.png"
              alt=""
              className="min-h-[220px] object-cover bg-gray-700 rounded-t-[12px]"
            />
            <div className="p-[18px] box-border text-[14px]">
              <p className="min-h-[54px] mb-[18px] font-medium text-gray-800">
                타코가 제일 맛있어요! 바다도 보이고 좋아요.샐러드도 신선하고
                맛있어요.최고예요! 샐러드도 신선하고 맛있어요.
              </p>
              <div className="flex justify-between">
                <strong className="screen_out">연관 태그</strong>
                <ul className="flex justify-start gap-[3px]">
                  <li className="tag_bd_gray px-[9px] py-[6px] bg-white text-[12px]">
                    #타코맛집
                  </li>
                  <li className="tag_bd_gray px-[9px] py-[6px] bg-white text-[12px]">
                    #바다뷰
                  </li>
                  <li className="tag_bd_gray px-[9px] py-[6px] bg-white text-[12px]">
                    #빠네
                  </li>
                </ul>
                <span className="font-semibold">
                  <span className="ico_pravel ico_like32_on mr-[4px]">
                    좋아요
                  </span>
                  12
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 left-0 w-full h-[8px] my-[30px]">
        <div className="swiper-review-pagination"></div>
      </div>
    </div>
  );
};

export default ReviewSwiper;
