import { baseURL, getAuthorization, setDefaultHeader } from '.';

const TOUR = '/tour/';

export const fetchTour = (latitude: number, longitude: number) => {
  const url = new URL(`${baseURL}${TOUR}`);

  return fetch(url, {
    method: 'GET',
    body: JSON.stringify({
      x: longitude,
      y: latitude,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Cannot get tour data');
    }
    return res.json();
  });
};

export default {};
