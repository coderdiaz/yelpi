import { keyframes, styled } from '@stitches/config';
import SkeletonPlace from '@components/Sidebar/SkeletonPlace';

export default function SkeletonPlaceList() {
  return (
    <StyledPlacesNav>
      <StyledPlacesList>
        { Array.from(Array(6).keys()).map((_, idx) => (
            <SkeletonPlace key={idx} />
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
