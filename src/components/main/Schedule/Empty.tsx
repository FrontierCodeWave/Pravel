// 아무것도 없을때~
const EmptyMain = () => {
  return (
    <section className="h-[calc(100vh_-_144px)] pb-[130px] flex justify-center items-center flex-col bg-gray-100">
      <span className="ico_pravel ico_compass">나침반 이미지</span>
      <div className="pt-[25px] font-semibold text-[20px] leading-5	text-gray-600">
        <p className="flex justify-center pb-2">
          <span className="ico_pravel ico_plus24">+</span> 버튼을 눌러 <br />
        </p>
        <p>여행을 시작해 보세요</p>
      </div>
    </section>
  );
};

export default EmptyMain;
