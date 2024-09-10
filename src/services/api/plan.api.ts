import { Plan, RecommandPlan } from '@/types/plan.type';

import { baseURL, origin, setDefaultHeader } from '.';

const PLAN = '/plan';

export const getRecommandPlanList = (token: string): Promise<RecommandPlan[]> =>
  fetch(`${origin}${baseURL}${PLAN}/recommand`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getPlanHistoryList = (token: string): Promise<Plan[]> =>
  fetch(`${origin}${baseURL}${PLAN}/history`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });
