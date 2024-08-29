import { EnergyResponse } from '@/types/enrgy.type';

import { baseURL, origin, setDefaultHeader } from '.';

const ENERGY = '/energy';

export const getEnergyList = (
  token: string,
  used: boolean = false,
): Promise<EnergyResponse[]> =>
  fetch(`${origin}${baseURL}${ENERGY}?used=${used}`, {
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

export default getEnergyList;
