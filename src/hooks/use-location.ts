import { useCallback, useState } from 'react';
import { LatLng } from '@util/config'; 

const getCurrentLocation = (): Promise<LatLng> => 
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(`Geolocation API is not supported by your browser`);
    }

    navigator.geolocation.getCurrentPosition(position => resolve({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }), reject);
  });

export default function useLocation() {
  const [location, setLocation] = useState<LatLng>();

  const getLocation = useCallback(async () => {
    const location = await getCurrentLocation();
    setLocation(location);

    return location;
  }, [location]);

  return { getLocation, location };
}