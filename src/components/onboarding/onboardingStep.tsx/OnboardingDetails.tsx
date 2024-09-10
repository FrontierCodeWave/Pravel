import { useState } from 'react';

import useModal from '@/hook/useModal';
import getDates from '@/utils/getDates';

import OnboardingLayout from '../OnboardingLayout';
import OnboardingDateModal from '../onboardingModal.tsx/OnboardingDateModal';

const OnboardingDetails = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    onboardingCalendar: false,
  });
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(
    new Date(),
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>(
    new Date(),
  );

  const formattedStartDate =
    selectedStartDate && getDates(selectedStartDate, true);
  const formattedEndDate = selectedEndDate && getDates(selectedEndDate, true);

  const formattedDate =
    formattedStartDate &&
    `${formattedStartDate?.year}.${formattedStartDate?.month}.${formattedStartDate?.day} (${formattedStartDate?.dayOfWeek}) - ${formattedEndDate?.year}.${formattedEndDate?.month}.${formattedEndDate?.day} (${formattedEndDate?.dayOfWeek})
`;

  const openDateModal = () => {
    openModal('onboardingCalendar');
  };

  return (
    <>
      <OnboardingLayout
        titlePrimary="언제, 어디로, 몇 명이서"
        title="떠나시나요?"
      >
        <div className="input_box_gray relative">
          <label htmlFor="onboardingDate" className="">
            날짜
          </label>
          <input
            type="text"
            id="onboardingDate"
            disabled
            value={formattedDate}
            className=""
          />
          <button
            type="button"
            onClick={openDateModal}
            className="absolute w-full h-full top-0 left-0"
          >
            <span className="blind">날짜 선택 팝업버튼</span>
          </button>
        </div>
        <div>
          <label htmlFor="onboardingLocation">장소</label>
          <input type="text" id="onboardingLocation" />
        </div>
        <div>
          <div>
            <label>성인</label>
            <input type="number" />
          </div>
          <div>
            <label>아동</label>
            <input type="number" />
          </div>
        </div>
      </OnboardingLayout>
      {modalState.onboardingCalendar && (
        <OnboardingDateModal
          setSelectedStartDate={setSelectedStartDate}
          setSelectedEndDate={setSelectedEndDate}
          closeModal={() => {
            closeModal('onboardingCalendar');
          }}
        />
      )}
    </>
  );
};

export default OnboardingDetails;
