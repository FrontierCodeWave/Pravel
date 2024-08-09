import Link from 'next/link';

interface ModalOpenType {
  openModalAddOption: boolean;
  setOpenModalAddOption: React.Dispatch<React.SetStateAction<boolean>>;
  openModalWishList: boolean;
  setOpenModalWishList: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddOption = ({
  openModalAddOption,
  setOpenModalAddOption,
  openModalWishList,
  setOpenModalWishList,
}: ModalOpenType) => {
  const onOpenModal = () => {
    setOpenModalAddOption(!openModalAddOption);
  };

  const onOpenWishList = () => {
    setOpenModalWishList(!openModalWishList);
  };

  return (
    <div
      className={`absolute bottom-0 left-0 w-full mb-[28px] pt-[10px] pb-[41px] z-10 bg-white animate-modalUp`}
    >
      <button
        onClick={onOpenModal}
        className="blind block w-full before:content-[''] before:block before:w-[64px] before:h-[4px] before:bg-gray-300 before:mb-[28px] before:mx-[auto]"
      >
        하단으로 모달창 내리기
      </button>
      <div>
        <div className="flex px-[40px] gap-[14px] items-stretch">
          <button
            onClick={onOpenWishList}
            className="relative w-1/2 bg-gray-100 border border-gray-300 rounded-[20px] pt-[30px] pb-[24px] before:content-[''] before:block before:w-[56px] before:h-[56px] before:bg-[url('/img_pravel.png')] before:bg-[-112px_-128px] before:bg-[length:300px_300px] before:m-[0_auto]"
          >
            <p className="absolute w-full top-[10px] px-[12px] flex justify-between">
              <span className="blind w-[25px] h-[9px] bg-[url('/img_pravel.png')] bg-[-224px_-175px] bg-[length:300px_300px]">
                New
              </span>
              <span className="text-primary">3</span>
            </p>
            <span className="block pt-[19px]">나의 위시리스트</span>
          </button>

          <Link
            href="/search"
            className="w-1/2 bg-gray-100 border border-gray-300 rounded-[20px] pt-[30px] pb-[24px] before:content-[''] before:block before:w-[56px] before:h-[56px] before:bg-[url('/img_pravel.png')] before:bg-[-168px_-128px] before:bg-[length:300px_300px] before:m-[0_auto]"
          >
            <span className="block pt-[19px] text-center">장소 탐색하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddOption;
