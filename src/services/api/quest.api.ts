import { Quest, StartQuestRequest } from '@/types/quest.type';
import { LocationData } from '@/types/search.type';

import { baseURL, setDefaultHeader } from '.';

const QUEST = '/quest';

export const getQuestList = async ({
  lat,
  lng,
}: LocationData): Promise<Quest[]> =>
  fetch(`${baseURL}${QUEST}?x=${lat}&y=${lng}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const getQuest = async (questId: number): Promise<Quest> =>
  fetch(`${baseURL}${QUEST}/${questId}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export const startQuest = async ({
  id,
  ...props
}: StartQuestRequest): Promise<void> =>
  fetch(`${baseURL}${QUEST}/${id}`, {
    method: 'POST',
    headers: await setDefaultHeader(),
    body: JSON.stringify(props),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  });
