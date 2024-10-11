import { useEffect, useState } from 'react';

interface ModalState {
  [key: string]: boolean;
}

type ModalActions = {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  closeAllModals: () => void;
};

export enum MODAL {
  ADD_OPTION = 'addOption',
  WISH_LIST = 'wishList',
  ONBOARDING_CALENDAR = 'onboardingCalendar',
  ONBOARDING_SEARCH_LOCATION = 'onboardingSearchLocation',
  SHARE_LINK = 'shareLink',
  QUEST = 'quest',
}

const useModal = (initState: ModalState = {}): [ModalState, ModalActions] => {
  const [modalState, setModalState] = useState<ModalState>(initState);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (!target.closest('.modal-content')) {
      closeAllModals();
    }
  };

  const openModal = (modal: string) => {
    setModalState((prevState) => ({ ...prevState, [modal]: true }));
  };

  const closeModal = (modal: string) => {
    setModalState((prevState) => ({ ...prevState, [modal]: false }));

    // 모든 모달이 닫히면 클릭 외부 이벤트 리스너를 제거
    if (!Object.values(modalState).some((isOpen) => isOpen)) {
      // document.removeEventListener('click', handleClickOutside);
    }
  };

  const closeAllModals = () => {
    setModalState((prevState) => {
      const newState = { ...prevState };

      Object.keys(newState).forEach((modal) => {
        newState[modal] = false;
      });
      return newState;
    });
  };

  useEffect(() => {
    if (Object.values(modalState).includes(true)) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [modalState]);

  return [modalState, { openModal, closeModal, closeAllModals }];
};

export default useModal;
