'use client';

import { useEffect } from 'react';

import WishList from '@/components/main/AddOption/WishList';
import ScheduleList from '@/components/main/Schedule/ScheduleList';
import QuestModal from '@/components/quest/modal/QuestModal';
import useModal, { MODAL } from '@/hook/useModal';
import { useFetchPlan } from '@/hook/usePlan';
import Header from '@/layout/header/Header';
import { usePlanStateStore } from '@/store';
import { formattedDate } from '@/utils/getDates';

import AddOption from '../components/main/AddOption/AddOption';
import DateViewer from '../components/main/DateHeader';
import FloatingBar from '../components/main/FloatingBar';
import Gnb from '../layout/navigation/Gnb';

const Home = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.ADD_OPTION]: false,
    [MODAL.WISH_LIST]: false,
    [MODAL.QUEST]: false,
  });

  const { data, isError, isFetching } = useFetchPlan();

  const { changeCurrentDate, changePlanId, changeStartDate, changeEndDate } =
    usePlanStateStore();

  useEffect(() => {
    if (!data?.startDate) return;
    if (new Date(data?.startDate) < new Date()) {
      changeCurrentDate(formattedDate(new Date()));
    } else {
      changeCurrentDate(data?.startDate);
    }

    if (!data?.planId) return;
    changePlanId(data?.planId);

    changeStartDate(data?.startDate);

    if (!data?.endDate) return;
    changeEndDate(data?.endDate);
  }, [data, changeCurrentDate, changePlanId, changeStartDate, changeEndDate]);

  return (
    <>
      <main className="relative min-h-dvh pb-[134px] bg-gray-100">
        <Header />
        <Gnb />
        <>
          <DateViewer />
          <ScheduleList />
        </>
        <FloatingBar
          openAddOption={() => openModal(MODAL.ADD_OPTION)}
          openQuest={() => openModal(MODAL.QUEST)}
        />
      </main>
      {modalState.addOption && (
        <AddOption
          closeAddOption={() => closeModal(MODAL.ADD_OPTION)}
          openWishList={() => openModal(MODAL.WISH_LIST)}
        />
      )}
      {modalState.wishList && (
        <WishList
          closeWishList={() => {
            closeModal(MODAL.WISH_LIST);
          }}
          closeModals={() => {
            closeModal(MODAL.WISH_LIST);
            closeModal(MODAL.ADD_OPTION);
          }}
        />
      )}
    </>
  );
};

export default Home;
