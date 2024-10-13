import { Bounce, toast, TypeOptions } from 'react-toastify';

export const boundToast = (message: string, type: TypeOptions = 'success') => {
  toast(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Bounce,
    type,
  });
};
