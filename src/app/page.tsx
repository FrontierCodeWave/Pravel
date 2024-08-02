'use client';

import { useState } from 'react';

import Header from '@/layout/header/Header';

import DateViewer from '../components/main/DateViewer';
import EmptyMain from '../components/main/EmptyMain';
import FloatingBar from '../components/main/FloatingBar';
import Snb from '../components/main/Snb';
import TravelOptionsModal from '../components/main/TravelOptionsModal';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <main className="relative">
        <Header />
        <Snb />
        <>
          <DateViewer />
          <EmptyMain />
        </>
        <FloatingBar modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </main>
      {modalOpen && (
        <TravelOptionsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default Home;
