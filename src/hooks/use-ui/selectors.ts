import { IUiState } from './types';

export const currentCitySelector = (state: IUiState) => state.currentCity;
export const setCurrentCitySelector = (state: IUiState) => state.setCurrentCity;

export const searchSelector = (state: IUiState) => state.search;
export const setSearchValueSelector = (state: IUiState) => state.setSearch;

export const locationSelector = (state: IUiState) => state.location;
export const setLocationSelector = (state: IUiState) => state.setLocation;

export const selectedPlaceSelector = (state: IUiState) => state.selectedPlace;
export const setSelectedPlaceSelector = (state: IUiState) => state.setSelectedPlace;
