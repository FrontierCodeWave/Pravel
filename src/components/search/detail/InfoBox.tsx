const InfoBox = () => {
  return (
    <div className="box_search text-[14px]">
      <div>
        <span className="inline-block mb-[8px] px-[6px] rounded-[4px] bg-[#DAF1EC] font-medium text-[13px] leading-[24px]">
          <span className="ico_pravel ico_cate_food align-middle">
            카테고리
          </span>
          양식
        </span>
        <div className="mb-[20px]">
          <strong className="inline-block mr-[12px] font-semibold text-[24px]">
            비스트로
          </strong>
          <span className=" text-gray-600">제주 서귀포시</span>
        </div>
        <div className="mb-[20px] pb-[20px] border-b border-gray-200">
          <span className="inline-block mr-[12px] pr-[12px] border-r border-gray-300 font-semibold text-[16px] leading-[16px]">
            <span className="ico_pravel ico_star14">평점</span>4.5
          </span>
          <span className="text-gray-600 text-[15px] leading-[18px]">
            리뷰 32개
          </span>
          <strong className="screen_out">태그 목록</strong>
          <ul className="flex justify-start gap-[4px] mt-[12px]">
            <li className="tag_bg_gray">#파스타</li>
            <li className="tag_bg_gray">#파스타</li>
            <li className="tag_bg_gray">#파스타</li>
          </ul>
        </div>
      </div>
      <strong className="screen_out">영업 정보</strong>
      <ul className="leading-[24px] text-gray-700 font-medium">
        <li className="mb-[10px]">
          <span>
            <span className="ico_pravel ico_time24 mr-[4px]">영업시간</span>
            <em className="mr-[8px] font-bold not-italic">영업중</em>
            화-일 11:00 ~ 21:00
          </span>
        </li>
        <li className="mb-[10px]">
          <span className="ico_pravel ico_place24 mr-[4px]">위치</span>
          제주특별자치도 서귀포시 특별자치도, 안덕면 화순로 154 25 1층 화순리
          1053-128번지 1층
        </li>
        <li className="mb-[10px]">
          <span className="ico_pravel ico_site24 mr-[4px]">관련 사이트</span>
          <a href="instagram.com" target="_blank">
            instagram.com
          </a>
        </li>
        <li className="mb-[10px] font-bold text-primary">
          <span className="ico_pravel ico_phone24 mr-[4px]">연락처</span>
          064-123-4567
        </li>
      </ul>
    </div>
  );
};

export default InfoBox;
