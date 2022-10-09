import { styled } from '@stitches/config';
import Stack from '@components/Stack';

export default function SkeletonReview() {
  return (
    <StyledReview direction="column" css={{ width: '100%', spaceY: 12 }}>
      <Stack align="center" css={{ width: '100%', spaceX: 8 }}>
        <ImageWrapper>
          <Avatar />
        </ImageWrapper>
        <Stack direction="column" css={{ width: '100%', spaceY: 6 }}>
          <Loader css={{ width: 72, height: 14 }} />
          <Loader css={{ width: 96, height: 14 }} />
        </Stack>
      </Stack>
      <Stack direction="column" css={{ width: '100%', spaceY: 8 }}>
        <Loader css={{ width: '100%', height: 14 }} />
        <Loader css={{ width: '100%', height: 14 }} />
        <Loader css={{ width: '100%', height: 14 }} />
        <Loader css={{ width: '50%', height: 14 }} />
      </Stack>
    </StyledReview>
  )
}

const ImageWrapper = styled('div', {
  position: 'relative',
  width: 40,
  height: 40,
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: 9999,
  background: '$slate200',
});

const Loader = styled('div', {
  height: 16,
  background: '$slate200',
  borderRadius: 16,
});

const Avatar = styled('div', {
  objectFit: 'cover',
  width: 40,
  height: 40,
  background: '$slate200',
});

const StyledReview = styled(Stack, {
  pb: 24,
  borderBottom: '1px solid $slate200',
  '&:last-child': { border: 0 },
});
