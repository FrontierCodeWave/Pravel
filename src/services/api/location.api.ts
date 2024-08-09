const getLocation = (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve([position.coords.latitude, position.coords.longitude]),
        (error) => reject(error),
      );
    } else {
      reject(
        new Error(
          'Geolocation is not supported by this browser or environment.',
        ),
      );
    }
  });
};

export default getLocation;
