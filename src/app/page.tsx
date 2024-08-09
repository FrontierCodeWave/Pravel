'use client';

import { useState } from 'react';

import WishList from '@/components/main/AddOption/WishList';
import ScheduleList from '@/components/main/Schedule/ScheduleList';
import Header from '@/layout/header/Header';

import AddOption from '../components/main/AddOption/AddOption';
import DateViewer from '../components/main/DateHeader';
import FloatingBar from '../components/main/FloatingBar';
import Gnb from '../layout/navigation/Gnb';

const Home = () => {
  const [openModalAddOption, setOpenModalAddOption] = useState<boolean>(false);
  const [openModalWishList, setOpenModalWishList] = useState<boolean>(false);

  return (
    <>
      <main className="relative min-h-svh">
        <Header />
        <Gnb />
        <>
          <DateViewer />
          <ScheduleList />
        </>
        <FloatingBar
          openModalAddOption={openModalAddOption}
          setOpenModalAddOption={setOpenModalAddOption}
        />
      </main>
      {openModalAddOption && (
        <AddOption
          openModalAddOption={openModalAddOption}
          setOpenModalAddOption={setOpenModalAddOption}
          openModalWishList={openModalWishList}
          setOpenModalWishList={setOpenModalWishList}
        />
      )}
      {openModalWishList && (
        <WishList
          openModalWishList={openModalWishList}
          setOpenModalWishList={setOpenModalWishList}
        />
      )}
    </>
  );
};

export default Home;
