export interface Quest {
  id: number;
  energy: number;
  title: string;
}

export interface StartQuestRequest {
  id: number;
  planId: number;
  date: string;
}
