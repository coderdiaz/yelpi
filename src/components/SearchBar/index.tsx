import { styled } from '@stitches/react';
import Stack from '@components/Stack';
import {
  LocationSelector,
  LocationSelectorItem,
} from '@components/SearchBar/LocationSelector';
import Search from '@components/SearchBar/Search';

export default function SearchBar() {
  return (
    <StyledStack>
      <LocationSelector defaultValue="Mexico City">
        <LocationSelectorItem value="CurrentLocation">
          Current Location
        </LocationSelectorItem>
        <LocationSelectorItem value="Mexico City">
          Mexico City
        </LocationSelectorItem>
        <LocationSelectorItem value="Monterrey">
          Monterrey
        </LocationSelectorItem>
        <LocationSelectorItem value="Guadalajara">
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
