type City = {
  latitude: number;
  longitude: number;
}

type Config = {
  cities: {
    [key: string]: City;
  };
};

const config: Config = {
  cities: {
    cdmx: { latitude: 19.44216, longitude: -99.156579 },
    mty: { latitude: 19.44216, longitude: -99.156579 },
    gdl: { latitude: 19.44216, longitude: -99.156579 },
  },
};
