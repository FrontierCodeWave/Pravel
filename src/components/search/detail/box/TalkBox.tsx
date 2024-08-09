import style from './box.module.css';

const TalkBox = () => {
  return (
    <div className={style.box_detail}>
      <strong className={style.tit_detail}>실시간 여행자 Talk</strong>
      <div className="relative min-h-[498px] my-[20px] p-[18px] bg-gray-100 rounded-[12px] box-border">
        <div></div>
        <div className="absolute left-[18px] right-[18px] bottom-[18px] w-[calc(100%-36px)] h-40px">
          <button type="button" className="mr-[16px] my-[4px]">
            <span className="ico_pravel ico_plus32">첨부하기</span>
          </button>
          <textarea
            className="w-[calc(100%-48px)] h-full"
            name=""
            id=""
          ></textarea>
          <button type="button" className="absolute right-0 bottom-0">
            <span className="ico_pravel ico_send24">보내기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalkBox;
