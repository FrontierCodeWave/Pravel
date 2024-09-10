import Link from 'next/link';

import '@/styles/global.css';

const Gnb = () => {
  return (
    <nav className="absolute bottom-0 left-0 w-full before:content-[''] before:w-full before:h-[130px] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t from-white to-transparent">
      <ul className="relative z-10 flex pt-[8px] pb-[24px] bg-white rounded-[20px_20px_0_0] shadow-[0_-4px_16px_0_#0000000D]">
        <li className="w-[calc(100%_/_3)] flex flex-col items-center">
          <Link href={'/'} className="ico_pravel margin_center ico_home"></Link>
          <span className="text-[11px]">홈</span>
        </li>
        <li className="w-[calc(100%_/_3)] flex flex-col items-center">
          <Link
            href="/travel-record"
            className="ico_pravel margin_center ico_records"
          ></Link>
          <span className="text-[11px]">여행기록</span>
        </li>
        <li className="w-[calc(100%_/_3)] flex flex-col items-center">
          <Link
            href="/mypage"
            className="ico_pravel margin_center ico_mypage"
          ></Link>
          <span className="text-[11px]">마이페이지</span>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
