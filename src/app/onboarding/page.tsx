'use client';

import { createContext, useState } from 'react';

import OnboardingIntro from '@/components/onboarding/OnboardingIntro';
import OnboardingDetails from '@/components/onboarding/onboardingStep.tsx/OnboardingDetails';
import OnboardingLocation from '@/components/onboarding/onboardingStep.tsx/OnboardingLocation';
import OnboardingName from '@/components/onboarding/onboardingStep.tsx/OnboardingName';
// import createOnboardingAction from '@/lib/actions/onboarding-action';
// import { OnboardingRequest } from '@/types/onboarding.type';

export const OnboardingContext = createContext({
  // 실제 값이 아닌, 타입 추론용으로 쓰임
  step: 0,
  moveToIntro: () => {},
  prevStep: () => {},
  nextStep: () => {},
  onSubmit: () => {},
});

const OnBoardingPage = () => {
  const [step, setStep] = useState(1); // 작업완료후 0으로 수정하기
  // const [onboardingData, setOnboardingData] = useState<OnboardingRequest>({
  //   location: '',
  //   title: '',
  //   adult: 0,
  //   child: 0,
  //   startDate: '',
  //   endDate: '',
  // });

  const moveToIntro = () => setStep(0);
  const prevStep = () => setStep((prev) => prev - 1);
  const nextStep = () => setStep((prev) => prev + 1);
  const onSubmit = () => {
    // createOnboardingAction(onboardingData);
  };

  return (
    <OnboardingContext.Provider
      value={{ step, prevStep, nextStep, moveToIntro, onSubmit }}
    >
      {step === 0 && <OnboardingIntro />}
      {step === 1 && <OnboardingDetails />}
      {step === 2 && <OnboardingLocation />}
      {step === 3 && <OnboardingName />}
    </OnboardingContext.Provider>
  );
};

export default OnBoardingPage;
