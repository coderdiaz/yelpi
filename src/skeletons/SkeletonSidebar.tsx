import { styled } from '@stitches/config';
import SkeletonPlaceList from '@skeletons/SkeletonPlaceList';

export default function SkeletonSidebar() {
  return (
    <StyledAside>
      <StyledSticky>
        <Loader css={{ width: 120, opacity: 0.7, height: 15 }} />
      </StyledSticky>
      <SkeletonPlaceList />
    </StyledAside>
  );
}

const Loader = styled('div', {
  height: 16,
  background: '$slate200',
  borderRadius: 16,
});

const StyledSticky = styled('div', {
  position: 'sticky',
  top: 0,
  pt: 32,
  pb: 28,
  zIndex: 999,
  width: '100%',
  background: 'linear-gradient($slate100, $slate100 50%, $slate100 75%, transparent)',
});



const StyledAside = styled('aside', {
  pr: 32,
  pl: 4,
  borderRight: '1px solid $slate300',
  width: 448,
  overflowY: 'scroll',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
});
