'use client';

import WishList from '@/components/main/addOption/WishList';
import ScheduleList from '@/components/main/schedule/ScheduleList';
import useModal from '@/hook/useModal';
import Header from '@/layout/header/Header';

import AddOption from '../components/main/addOption/AddOption';
import DateViewer from '../components/main/DateHeader';
import FloatingBar from '../components/main/FloatingBar';
import Gnb from '../layout/navigation/Gnb';

const Home = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    addOption: false,
    wishList: false,
  });

  return (
    <>
      <main className="relative min-h-svh">
        <Header />
        <Gnb />
        <>
          <DateViewer />
          <ScheduleList />
        </>
        <FloatingBar openAddOption={() => openModal('addOption')} />
      </main>
      {modalState.addOption && (
        <AddOption
          closeAddOption={() => closeModal('addOption')}
          openWishList={() => openModal('wishList')}
        />
      )}
      {modalState.wishList && (
        <WishList
          closeWishList={() => {
            closeModal('wishList');
          }}
          closeModals={() => {
            closeModal('wishList');
            closeModal('addOption');
          }}
        />
      )}
    </>
  );
};

export default Home;
