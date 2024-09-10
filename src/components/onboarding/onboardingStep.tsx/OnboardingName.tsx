import OnboardingLayout from '../OnboardingLayout';

const OnboardingName = () => {
  return (
    <OnboardingLayout
      titlePrimary={
        <h1 className="text-gray-900 text-[26px] font-bold leading-[1.19] pb-[30px]">
          <span className="text-primary">이번 여행의 이름</span>을 정해보세요
          <br />
          (선택)
        </h1>
      }
    >
      <div>
        <label htmlFor=""></label>
        <input type="text" />
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingName;
