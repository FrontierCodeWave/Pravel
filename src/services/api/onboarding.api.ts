import { OnboardingRequest } from '@/types/onboarding.type';

import { baseURL, origin, setDefaultHeader } from '.';

const PLAN = '/plan';

const createOnboarding = (
  token: string,
  onboardingData: OnboardingRequest,
): Promise<void> =>
  fetch(`${origin}${baseURL}${PLAN}`, {
    method: 'POST',
    headers: setDefaultHeader(token),
    body: JSON.stringify(onboardingData),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default createOnboarding;
