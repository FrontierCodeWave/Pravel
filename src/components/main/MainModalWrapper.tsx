'use client';

import useModal, { MODAL } from '@/hook/useModal';

import AddOption from './AddOption/AddOption';
import WishList from './AddOption/WishList';
import FloatingBar from './FloatingBar';

const MainModalWrapper = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.ADD_OPTION]: false,
    [MODAL.WISH_LIST]: false,
  });

  return (
    <>
      <FloatingBar openAddOption={() => openModal(MODAL.ADD_OPTION)} />
      <AddOption
        addOptionOpen={modalState.addOption}
        closeAddOption={() => closeModal(MODAL.ADD_OPTION)}
        openWishList={() => openModal(MODAL.WISH_LIST)}
      />
      <WishList
        wishListOpen={modalState.wishList}
        closeWishList={() => {
          closeModal(MODAL.WISH_LIST);
        }}
        closeModals={() => {
          closeModal(MODAL.WISH_LIST);
          closeModal(MODAL.ADD_OPTION);
        }}
      />
    </>
  );
};

export default MainModalWrapper;
