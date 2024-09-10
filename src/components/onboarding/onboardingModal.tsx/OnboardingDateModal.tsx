import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';

import getDates from '@/utils/getDates';

import 'react-datepicker/dist/react-datepicker.css';
import './OnboardingDateModal.css';

registerLocale('ko', ko);

interface OnboardingModalType {
  closeModal: () => void;
  setSelectedStartDate: () => void;
  setSelectedEndDate: () => void;
}

const OnboardingDateModal = ({
  closeModal,
  setSelectedStartDate,
  setSelectedEndDate,
}: OnboardingModalType) => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>();

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };
  const formattedStartDate = startDate && getDates(startDate, true);
  const formattedEndDate = endDate && getDates(endDate, true);

  const handleSubmit = () => {
    closeModal();
    // close 한 뒤에 다시 modal 열었을때 해당 날짜가 선택되도록
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  return (
    <div className="onboarding-modal modal-content absolute bottom-0 left-0 w-full rounded-[20px_20px_0_0] pb-[34px] bg-white shadow-[0_-3px_20px_0px_rgba(0,0,0,0.1)]">
      <button
        onClick={closeModal}
        className="blind block w-full before:content-[''] before:block before:w-[62px] before:h-[4px] before:bg-gray-300 mt-[10px] before:mb-[22px] before:mx-[auto] "
      >
        하단으로 모달창 내리기
      </button>
      <DatePicker
        selectsRange
        selected={startDate}
        // 날짜 누를 때의 이벤트를 식별하기 위한 onChange이벤트
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        // input박스 대신 캘린더만 나오게 해주는 inline
        inline
        // 캘린더를 한국어로 바꿔주는 locale
        locale={ko}
        // dateFormat="yyyy.MM"
        // 최소 날짜를 오늘 날짜로 설정해주는 minDate
        // minDate={new Date()}
      />
      <div className="text-left px-4 max-w-[358px] mt-[35px] mb-[20px] mx-auto">
        <p className="pb-[6px] text-gray-600 font-semibold text-[14px]">
          여행일자
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[18px]">{`${formattedStartDate?.month}월 ${formattedStartDate?.day}일 (${formattedStartDate?.dayOfWeek})
          ${(formattedEndDate || '') && `- ${formattedEndDate?.month}월 ${formattedEndDate?.day}일 (${formattedEndDate?.dayOfWeek})`}`}</p>
          <p className="text-[14px] text-primary">3박 4일</p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full max-w-[358px] py-[1em] rounded-xl font-bold bg-primary text-white"
      >
        선택 완료
      </button>
    </div>
  );
};

export default OnboardingDateModal;
