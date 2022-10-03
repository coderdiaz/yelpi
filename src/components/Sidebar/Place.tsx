import { memo } from 'react';
import Image from 'next/future/image';
import { styled } from '@stitches/config';
import Text from '@components/Text';
import Stack from '@components/Stack';
import { Tag } from '@components/Tag';
import Raiting from '@components/Raiting';

function Place() {
  return (
    <StyledPlaceItem>
      <StyledPlaceContent>
        <PlaceImage>
          <StyledImage
            src="https://s3-media1.fl.yelpcdn.com/bphoto/7sXKhFRfP3PB06gdRF69wg/o.jpg"
            alt="Place Image Placeholder"
            fill
           />
        </PlaceImage>
        <PlaceInfo>
          <Stack direction="column" css={{ height: '100%' }}>
            <PlaceName weight="semibold" size="lg">Contramar</PlaceName>
            <PlaceDetails align="center" css={{ spaceX: 8 }}>
              <Tag size="sm" intent="success">Open</Tag>
              <Raiting value={4.5} />
              <Text size="sm" css={{ color: '$slate600' }}>20 reviews</Text>
            </PlaceDetails>
          </Stack>
          <Tags>
            <Tag size="sm" intent="transparent">Mexican</Tag>
            <Tag size="sm" intent="transparent">Seafood</Tag>
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
  p: 12,
  border: '1px solid $slate300',
  borderRadius: 12,
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