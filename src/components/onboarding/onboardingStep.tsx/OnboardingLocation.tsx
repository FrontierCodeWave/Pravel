import OnboardingLayout from '../OnboardingLayout';

const OnboardingLocation = () => {
  return (
    <OnboardingLayout titlePrimary="출발, 도착은" title="어디에서 하시나요?">
      <div>
        <label>여행 시작 지점</label>
        <input />
      </div>
      <div>
        <label>여행 시작 지점</label>
        <input />
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingLocation;
