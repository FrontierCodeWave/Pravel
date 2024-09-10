export interface Plan {
  id: number;
  url: string;
  title: string;
  startDate: string;
  endDate: string;
}

export type RecommandPlan = Pick<Plan, 'id' | 'url'>;
