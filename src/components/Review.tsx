import Image from 'next/future/image';
import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import Text from '@components/Text';
import Raiting from '@components/Raiting';
import type { Review as ReviewType } from '@gqlyelp/types';
import PlaceholderAvatar from '@images/placeholder-avatar.png';

export default function Review({
  user,
  text,
  rating
}: ReviewType) {
  return (
    <StyledReview direction="column" css={{ spaceY: 12 }}>
      <Stack align="center" css={{ spaceX: 8 }}>
        <ImageWrapper>
          <Avatar
            src={user.image_url ?? PlaceholderAvatar}
            alt={`Avatar of ${user.name}`}
            fill
          />
        </ImageWrapper>
        <Stack direction="column" css={{ spaceY: 1 }}>
          <Text weight="medium">{user.name}</Text>
          <Raiting value={rating} />
        </Stack>
      </Stack>
      <Text css={{ lineHeight: '24px' }}>{text}</Text>
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
