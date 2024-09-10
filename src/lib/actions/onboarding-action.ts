'use server';

import createOnboarding from '@/services/api/onboarding.api';
import { OnboardingRequest } from '@/types/onboarding.type';

import { getToken } from '../auth';

const createOnboardingAction = async (onboardingData: OnboardingRequest) => {
  const token = await getToken();

  return createOnboarding(token, onboardingData);
};

export default createOnboardingAction;
