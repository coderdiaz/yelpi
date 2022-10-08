import Image from 'next/future/image';
import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import Text from '@components/Text';
import type { Review } from '@gqlyelp/types';
import Raiting from '@components/Raiting';

export default function Review() {
  return (
    <StyledReview direction="column" css={{ spaceY: 12 }}>
      <Stack align="center" css={{ spaceX: 8 }}>
        <ImageWrapper>
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Avatar of"
            fill
          />
        </ImageWrapper>
        <Stack direction="column" css={{ spaceY: 1 }}>
          <Text weight="medium">Roxanne Loft</Text>
          <Raiting value={4.0} />
        </Stack>
      </Stack>
      <Text css={{ lineHeight: '24px' }}>
        Some of the best bbq fair I've had in a long time. Excellent smokey flavor and fall off the bone tender. The sides were great as well. Huge space with...
      </Text>
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
});

const Avatar = styled(Image, {
  objectFit: 'cover',
});

const StyledReview = styled(Stack, {
  pb: 24,
  borderBottom: '1px solid $slate200',
  '&:last-child': {
    border: 0,
  },
});
