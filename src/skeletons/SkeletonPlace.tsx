import { memo } from 'react';
import { keyframes, styled } from '@stitches/config';
import Stack from '@components/Stack';

function SkeletonPlace() {
  return (
    <StyledPlaceItem>
      <StyledPlaceContent>
        <SkeletonPlaceImage />
        <SkeletonPlaceInfo>
          <Stack direction="column" css={{ height: '100%', spaceY: 6 }}>
            <SkeletonPlaceName />
            <PlaceDetails align="center" css={{ spaceX: 8 }}>
              <SkeletonLoader css={{ width: 48 }} />
              <SkeletonLoader css={{ width: 96 }} />
              <SkeletonLoader css={{
                width: 32,
                display: 'none',
                '@md': {
                  display: 'block',
                },
              }} />
            </PlaceDetails>
          </Stack>
          <Tags>
            <SkeletonLoader css={{ width: 48 }} />
            <SkeletonLoader css={{ width: 48 }} />
          </Tags>
        </SkeletonPlaceInfo>
      </StyledPlaceContent>
    </StyledPlaceItem>
  );
}

const verticalAnimation = keyframes({
  '0%': { opacity: .3 },
  '50%': { opacity: 1 },
  '100%': { opacity: .3 },
});

const horizontalAnimation = keyframes({
  '0%': { backgroundPosition: '-100% 0' },
  '100%': { backgroundPosition: '100% 0' },
});

const SkeletonLoader = styled('div', {
  height: 16,
  background: '$slate100',
  borderRadius: 16,
});

const StyledPlaceItem = styled('li', {
  position: 'relative',
  animation: `${verticalAnimation} 2.5s ease`,
  animationIterationCount: 'infinite',
  animationFillMode: 'forwards',
  opacity: .3,
  '&:nth-child(2)': { animationDelay: '.5s' },
  '&:nth-child(3)': { animationDelay: '1s' },
  '&:nth-child(4)': { animationDelay: '1.5s' },
  '&:nth-child(5)': { animationDelay: '2s' },
  '&:nth-child(6)': { animationDelay: '2.5s' },

  // Before content
  '&:before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    animation: `${horizontalAnimation} 3.5s linear`,
    animationIterationCount: 'infinite',
    background: 'linear-gradient(to right, $slate200 2%, $slate600 18%, $slate300 33%)',
    backgroundSize: '50%',
    mixBlendMode: 'overlay',
    borderRadius: 12,
  },
});

const StyledPlaceContent = styled('div', {
  display: 'flex',
  spaceX: 12,
  background: '$white',
  p: 12,
  border: '1px solid $slate300',
  borderRadius: 12,
});

const SkeletonPlaceImage = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  width: 84,
  height: 84,
  borderRadius: 12,
  flexShrink: 0,
  background: '$slate100',
});

const SkeletonPlaceInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'between',
  width: '100%',
});

const SkeletonPlaceName = styled('div', {
  height: 16,
  width: '100%',
  background: '$slate100',
  borderRadius: 16,
});

const PlaceDetails = styled(Stack, {});

const Tags = styled('div', {
  display: 'flex',
  spaceX: 4,
});

export default memo(SkeletonPlace);