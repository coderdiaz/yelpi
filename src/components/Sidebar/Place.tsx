import { memo } from 'react';
import Image from 'next/future/image';
import { styled } from '@stitches/config';
import Text from '@components/Text';
import Stack from '@components/Stack';
import { Tag } from '@components/Tag';
import Raiting from '@components/Raiting';
import { Business } from '@gqlyelp/types';

type PlaceProps = {} & Business;

function Place({
  name,
  photos,
  rating,
  review_count,
  categories
}: PlaceProps) {
  return (
    <StyledPlaceItem>
      <StyledPlaceContent>
        <PlaceImage>
          <StyledImage
            src={photos[0]}
            alt={name}
            fill
           />
        </PlaceImage>
        <PlaceInfo>
          <Stack direction="column" css={{ height: '100%', spaceY: 4 }}>
            <PlaceName weight="semibold">{name}</PlaceName>
            <PlaceDetails align="center" css={{ spaceX: 8 }}>
              <Tag size="sm" intent="success">Open</Tag>
              <Raiting value={rating} />
              <Text size="sm" css={{ color: '$slate600' }}>{review_count} reviews</Text>
            </PlaceDetails>
          </Stack>
          <Tags>
            { categories.map((category, idx) => (
                <Tag key={idx} size="xs" intent="transparent">
                  {category.title}
                </Tag>
              )) }
          </Tags>
        </PlaceInfo>
      </StyledPlaceContent>
    </StyledPlaceItem>
  );
}

const StyledPlaceItem = styled('li', {
  position: 'relative',
});

const StyledPlaceContent = styled('div', {
  display: 'flex',
  spaceX: 12,
  background: '$white',
  p: 9,
  border: '1px solid $slate300',
  borderRadius: 12,
  overflow: 'hidden',
});

const PlaceImage = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  width: 84,
  height: 84,
  borderRadius: 12,
  flexShrink: 0,
});

const PlaceInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'between',
  width: '100%',
});

const StyledImage = styled(Image, {
  objectFit: 'cover',
});

const PlaceName = styled(Text, {});
const PlaceDetails = styled(Stack, {});

const Tags = styled('div', {
  display: 'flex',
  spaceX: 4,
});

export default memo(Place);