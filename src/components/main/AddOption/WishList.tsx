interface ModalOpenType {
  openModalWishList: boolean;
  setOpenModalWishList: React.Dispatch<React.SetStateAction<boolean>>;
}

const WishList = ({
  openModalWishList,
  setOpenModalWishList,
}: ModalOpenType) => {
  const onOpenWishList = () => {
    setOpenModalWishList(!openModalWishList);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full mb-[28px] pt-[10px] pb-[41px] z-20 bg-white animate-modalUp">
      <header>
        <h3>위시리스트</h3>
        <div>
          <button>뒤로가기</button>
          <button onClick={onOpenWishList}>위시리스트 팝업 닫기</button>
        </div>
      </header>
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>맛집</button>
        </li>
        <li>
          <button>관광</button>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default WishList;
