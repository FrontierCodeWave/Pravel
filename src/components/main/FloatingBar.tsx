interface modalOpenType {
  openModalAddOption: boolean;
  setOpenModalAddOption: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingBar = ({
  openModalAddOption,
  setOpenModalAddOption,
}: modalOpenType) => {
  const onOpenModal = () => {
    setOpenModalAddOption(!openModalAddOption);
  };

  return (
    <ul className="absolute bottom-[101px] right-[16px] w-[56px]">
      <li className="bg-white rounded-full shadow-[0_0_10px_0_#0000001A] mb-[8px]">
        <button className="ico_pravel ico_plus56" onClick={onOpenModal}>
          여행계획 추가하기
        </button>
      </li>
      <li className="bg-white rounded-full shadow-[0_0_10px_0_#0000001A]">
        <button className="ico_pravel ico_map56">지도보기</button>
      </li>
    </ul>
  );
};

export default FloatingBar;
