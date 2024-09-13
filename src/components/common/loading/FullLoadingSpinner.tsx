import IcoLoading from '../../svg/ico_loading.svg';

const FullLoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.35)] z-20 flex items-center justify-center">
      <IcoLoading />
      <span className="sr-only">로딩중...</span>
    </div>
  );
};

export default FullLoadingSpinner;
