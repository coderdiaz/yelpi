import Image from 'next/future/image';
import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import Text from '@components/Text';
import { Tag } from '@components/Tag';
import Raiting from '@components/Raiting';
import EmbedMap from '@components/EmbedMap';
import useUi from '@hooks/use-ui';
import { locationSelector } from '@hooks/use-ui/selectors';
import Review from '@components/Review';
import PhoneIcon from '@svg/phone.svg';

export default function Business() {
  const location = useUi(locationSelector);

  return (
    <StyledWrapper>
      <CoverWrapper>
        <Stack css={{ zIndex: 10, spaceX: 32, px: 48, pt: 84, pb: 32 }}>
          <ImageWrapper>
            <AvatarImage
              src="https://s3-media1.fl.yelpcdn.com/bphoto/LTCs-0feaMWsdyO7uxyxlA/o.jpg"
              alt=""
              fill />
          </ImageWrapper>
          <Stack align="center" justify="between" css={{ width: '100%' }}>
            <Heading direction="column">
              <PlaceName size="2xl" weight="semibold" css={{ color: '$white' }}>
                Contramar
              </PlaceName>
              <PlaceDetails align="center" css={{ spaceX: 8 }}>
                <Tag size="sm" intent="success">Open</Tag>
                <Raiting value={4.5} dark />
                <Text size="sm" css={{ color: '$white' }}>120 reviews</Text>
              </PlaceDetails>
            </Heading>
            <PhoneNumber href="#">
              <Image src={PhoneIcon} alt="Direction" />
              <Text weight="medium">To Call</Text>
            </PhoneNumber>
          </Stack>
          <CoverImageWrapper>
            <CoverImage
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Cover Image"
              fill />
          </CoverImageWrapper>
        </Stack>
        <DetailInfo>
          <Stack direction="column" css={{ width: '100%', spaceY: 44 }}>
            <Stack direction="column" css={{ width: '100%', spaceY: 12 }}>
              <Stack direction="column" css={{ spaceY: 4 }}>
                <Text as="span" size="lg" weight="semibold">
                  Location
                </Text>
                <StyledAddress
                  dangerouslySetInnerHTML={{
                    __html: `Pedro Baranda 17\nCol. Centro\n06030 México, D.F.\nMexico`
                  }}
                />
              </Stack>
              <EmbedMap
                lat={location.latitude}
                lng={location.longitude} />
            </Stack>
            <Stack direction="column" css={{ width: '100%', spaceY: 16 }}>
              <Text as="span" size="lg" weight="semibold">
                Reviews
              </Text>
              <Stack direction="column" css={{ spaceY: 24 }}>
                { Array.from(Array(6).keys()).map((_, idx) => (
                  <Review key={idx} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </DetailInfo>
      </CoverWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled('div', {
  marginTop: 32,
  width: '100%',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  height: 'calc(100% - 32px)',
  background: '$white',
  overflowY: 'scroll',
  borderTop: '1px solid $slate300',
  borderLeft: '1px solid $slate300',
  borderRight: '1px solid $slate300',
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
});
const AvatarImage = styled(Image, {
  objectFit: 'cover',
});

const Heading = styled(Stack, {
  py: 32,
  height: '100%',
  spaceY: 4,
});
const PlaceName = styled(Text, {});
const PlaceDetails = styled(Stack, {});

const CoverImageWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: -48,
  width: 'calc(100% + 48px)',
  height: 200,
  zIndex: -1,
  overflow: 'hidden',
  '&:before': {
    content: '',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, .3) 20%, rgba(0, 0, 0) 90%)',
  }
});

const CoverImage = styled(Image, {
  objectFit: 'cover',
  objectPosition: 'right'
});

const DetailInfo = styled('div', {
  display: 'grid',
  width: '100%',
  gap: 20,
  gridTemplateColumns: '1fr',
  px: 48,
  pb: 48,
});

const StyledAddress = styled('div', {
  lineHeight: '24px',
});

const PhoneNumber = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$slate50',
  px: 12,
  py: 8,
  borderRadius: 12,
  spaceX: 4,
  textDecoration: 'none',
  color: '$slate900',
});
