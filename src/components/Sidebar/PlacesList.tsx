import { styled } from '@stitches/config';
import Place from '@components/Sidebar/Place';
import { Business } from '@gqlyelp/types';
import useUi from '@hooks/use-ui';
import { setSelectedPlaceSelector } from '@hooks/use-ui/selectors';

type PlacesListProps = {
  items?: Business[];
}

export default function PlacesList({
  items = [],
}: PlacesListProps) {
  const handleSelectId = useUi(setSelectedPlaceSelector);

  return (
    <StyledPlacesNav>
      <StyledPlacesList>
        { items.map((item, idx) => (
            <Place
              {...item}
              key={idx}
              onClick={() => handleSelectId(item.id)} />
          )) }
      </StyledPlacesList>
    </StyledPlacesNav>
  );
}

const StyledPlacesNav = styled('nav', {
  pb: 32,
  marginTop: -12,
});

const StyledPlacesList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  spaceY: 12,
});
