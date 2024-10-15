import { logoutAction } from '@/lib/actions/auth-action';

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="w-[86px] h-[29px] text-primary text-[14px] font-semibold rounded-full border-primary border-2"
      >
        로그아웃
      </button>
    </form>
  );
};

export default LogoutButton;
