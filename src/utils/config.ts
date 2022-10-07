export type LatLng = {
  latitude: number;
  longitude: number;
}

type Config = {
  cities: {
    [key: string]: LatLng;
  };
};

export const config: Config = {
  cities: {
    cdmx: { latitude: 19.44216, longitude: -99.156579 },
    mty: { latitude: 25.6753607, longitude: -100.3477979 },
    gdl: { latitude: 20.6737883, longitude: -103.3704326 },
  },
};
