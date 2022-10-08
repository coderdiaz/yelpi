import create from 'zustand';
import { LatLng } from '@util/config';
import { IUiState } from './types';

const useUi = create<IUiState>((set) => ({
  search: '',
  currentCity: 'cdmx',
  selectedPlace: null,
  location: {
    latitude: 19.44216,
    longitude: -99.156579,
  },
  setCurrentCity: (currentCity: 'cdmx' | 'based_location' | 'mty' | 'gdl') =>
    set(() => ({ currentCity })),
  setSearch: (value: string) => set(() => ({ search: value })),
  setLocation: (location: LatLng) => set(() => ({ location })),
  setSelectedPlace: (id: string) => set(() => ({ selectedPlace: id }))
}));

export default useUi;
