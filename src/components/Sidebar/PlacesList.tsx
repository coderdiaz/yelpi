import { styled } from '@stitches/config';
import Place from '@components/Sidebar/Place';

export default function PlacesList() {
  return (
    <StyledPlacesNav>
      <StyledPlacesList>
        {[1,2,3,4,5,6].map((_, idx) => (
          <Place key={idx} />
        ))}
      </StyledPlacesList>
    </StyledPlacesNav>
  );
}

const StyledPlacesNav = styled('nav', {});

const StyledPlacesList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  spaceY: 12,
});
