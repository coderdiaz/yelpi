import { keyframes, styled } from '@stitches/config';
import Stack from '@components/Stack';
import Text from '@components/Text';
import SkeletonReview from 'skeletons/SkeletonReview';

export default function SkeletonBusiness() {
  return (
    <StyledWrapper>
      <CoverWrapper>
        <Stack css={{ zIndex: 10, spaceX: 32, px: 48, pt: 84, pb: 32 }}>
          <ImageWrapper>
            <AvatarImage />
          </ImageWrapper>
          <Stack align="center" justify="between" css={{ width: '100%' }}>
            <Heading direction="column" css={{ spaceY: 8 }}>
              <PlaceName size="2xl" weight="semibold" css={{ color: '$white' }} />
              <PlaceDetails align="center" css={{ spaceX: 8 }}>
                <StyledParagraphLoader css={{ width: 48, background: '$slate200' }} />
                <StyledParagraphLoader css={{ width: 96, background: '$slate200' }} />
                <StyledParagraphLoader css={{ width: 32, background: '$slate200' }} />
              </PlaceDetails>
            </Heading>
            <PhoneNumber />
          </Stack>
          <CoverImageWrapper />
        </Stack>
        <DetailInfo>
          <Stack direction="column" css={{ width: '100%', spaceY: 44 }}>
            <Stack direction="column" css={{ width: '100%', spaceY: 12 }}>
              <Stack direction="column" css={{ spaceY: 8 }}>
                <StyledParagraphLoader css={{ width: 72, height: 18 }} />
                <StyledParagraphLoader css={{ width: 480, height: 16 }} />
              </Stack>
              <EmbedMap />
            </Stack>
            <Stack direction="column" css={{ width: '100%', spaceY: 16 }}>
              <StyledParagraphLoader css={{ width: 72, height: 18 }} />
              <Stack direction="column" css={{ width: '100%', spaceY: 24 }}>
                <SkeletonReview />
                <SkeletonReview />
              </Stack>
            </Stack>
          </Stack>
        </DetailInfo>
      </CoverWrapper>
    </StyledWrapper>
  );
}

const horizontalAnimation = keyframes({
  '0%': { backgroundPosition: '-100% 0' },
  '100%': { backgroundPosition: '100% 0' },
});

const StyledWrapper = styled('div', {
  position: 'relative',
  marginTop: 32,
  width: '100%',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  height: 'calc(100% - 32px)',
  background: '$white',
  overflow: 'hidden',
  borderTop: '1px solid $slate300',
  borderLeft: '1px solid $slate300',
  borderRight: '1px solid $slate300',
  '&:before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100vh',
    animation: `${horizontalAnimation} 3.5s linear`,
    animationIterationCount: 'infinite',
    background: 'linear-gradient(to right, $slate300 2%, $slate400 20%, $slate300 33%)',
    backgroundSize: '50%',
    mixBlendMode: 'overlay',
    borderRadius: 12,
    zIndex: 11,
  },
});

const StyledParagraphLoader = styled('div', {
  height: 16,
  background: '$slate200',
  borderRadius: 16,
});

const EmbedMap = styled('div', {
  background: '$slate200',
  height: 240,
  width: '100%',
});

const CoverWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
});

const ImageWrapper = styled('div', {
  position: 'relative',
  width: 160,
  height: 160,
  overflow: 'hidden',
  borderRadius: 32,
  border: '4px solid $white',
  flexShrink: 0,
  background: '$slate200',
});
const AvatarImage = styled('div', {
  objectFit: 'cover',
  width: 160,
  height: 160,
});

const Heading = styled(Stack, {
  py: 32,
  height: '100%',
  spaceY: 4,
});
const PlaceName = styled(Text, {
  height: 16,
  width: '100%',
  background: '$slate200',
  borderRadius: 16,
});
const PlaceDetails = styled(Stack, {
  width: '100%',
});

const CoverImageWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: -48,
  width: 'calc(100% + 48px)',
  height: 200,
  zIndex: -1,
  overflow: 'hidden',
  background: '$slate50',
});

const DetailInfo = styled('div', {
  display: 'grid',
  width: '100%',
  gap: 20,
  gridTemplateColumns: '1fr',
  px: 48,
  pb: 48,
});

const PhoneNumber = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  background: '$slate200',
  height: 40,
  width: 104,
  px: 12,
  py: 8,
  borderRadius: 12,
  spaceX: 4,
  textDecoration: 'none',
  display: 'none',
  '@xl': {
    display: 'flex',
  },
});
