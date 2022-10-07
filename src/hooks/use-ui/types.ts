import { LatLng } from '@util/config';

export interface IUiState {
  search: string | null;
  currentCity: 'based_location' | 'cdmx' | 'mty' | 'gdl';
  location: LatLng;
  setCurrentCity: (city: 'based_location' | 'cdmx' | 'mty' | 'gdl') => void;
  setSearch: (value: string) => void;
  setLocation: (location: LatLng) => void;
};
