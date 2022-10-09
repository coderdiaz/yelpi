import { styled } from '@stitches/react';
import Stack from '@components/Stack';
import {
  LocationSelector,
  LocationSelectorItem,
} from '@components/SearchBar/LocationSelector';
import Search from '@components/SearchBar/Search';
import useUi from '@hooks/use-ui';
import {
  currentCitySelector,
  setCurrentCitySelector,
  setLocationSelector,
  setSelectedPlaceSelector,
} from '@hooks/use-ui/selectors';
import { config } from '@util/config';
import useLocation from '@hooks/use-location';

export default function SearchBar() {
  const { getLocation } = useLocation();
  const currentCity = useUi(currentCitySelector);
  const setCurrentCity = useUi(setCurrentCitySelector);
  const setLocation = useUi(setLocationSelector);
  const handleSelectedId = useUi(setSelectedPlaceSelector);

  const handleLocationChange = async (value: 'based_location' | 'cdmx' | 'mty' | 'gdl') => {
    setCurrentCity(value);
    handleSelectedId(null);

    if (value === 'based_location') {
      // Handle logic to get location values using Geolocation API
      const values = await getLocation();
      setLocation(values);

      return;
    }

    setLocation(config.cities[value]);
  }

  return (
    <StyledStack>
      <LocationSelector defaultValue={currentCity} onValueChange={handleLocationChange}>
        <LocationSelectorItem value="based_location">
          Current Location
        </LocationSelectorItem>
        <LocationSelectorItem value="cdmx">
          Mexico City
        </LocationSelectorItem>
        <LocationSelectorItem value="mty">
          Monterrey
        </LocationSelectorItem>
        <LocationSelectorItem value="gdl">
          Guadalajara
        </LocationSelectorItem>
      </LocationSelector>
      <Separator />
      <Search />
    </StyledStack>
  );
}

const StyledStack = styled(Stack, {
  border: '1px solid $slate300',
  borderRadius: 9999,
  overflow: 'hidden',
  height: '100%',
  spaceX: 8,
});

const Separator = styled('div', {
  height: 40,
  width: 1,
  background: '$slate300',
})
