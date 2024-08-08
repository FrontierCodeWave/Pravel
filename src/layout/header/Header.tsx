import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full px-[16px] h-[64px] box-border bg-primary flex justify-between items-center">
      <h1 className="logo">
        <Link href="/">
          <Image
            src="/logo_pravel.png"
            alt="P’revel"
            width={24}
            height={29}
            sizes="24px"
          />
        </Link>
      </h1>
      <button className="relative text-white border border-white/60 text-[13px] pr-[10px] pl-[40px] py-[8px] rounded-[34px] before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-[10px] before:w-[24px] before:h-[24px] before:bg-[url('/img_pravel.png')] before:bg-[-216px_-40px] before:bg-[length:250px_250px]">
        여행 관리
      </button>
    </header>
  );
};

export default Header;
