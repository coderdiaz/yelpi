import Image from 'next/future/image';
import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import Text from '@components/Text';

import CdmxImage from '@images/cdmx.png';
import MtyImage from '@images/mty.png';
import GdlImage from '@images/gdl.png';
import PlaceholderBanner from '@images/placeholder-banner.png';
import Fishing from '@svg/fishing.svg';
import Burgers from '@svg/burgers.svg';
import Pizza from '@svg/pizza.svg';
import Bbq from '@svg/bbq.svg';
import useUi from '@hooks/use-ui';
import {
  setCurrentCitySelector,
  setLocationSelector,
} from '@hooks/use-ui/selectors';
import { config } from '@util/config';

export default function QuickStart() {
  const changeCurrentCity = useUi(setCurrentCitySelector);
  const changeLocation = useUi(setLocationSelector);

  const handleCityChange = (city: 'cdmx' | 'mty' | 'gdl') => {
    changeCurrentCity(city);
    changeLocation(config.cities[city]);
  }

  return (
    <StyledWrapper>
      <Stack direction="column" css={{ spaceY: 24}}>
        <Stack direction="column" css={{ spaceY: 16, width: '100%' }}>
          <Text as="h2" weight="semibold" size="xl">Explore other cities</Text>
          <StyledCities>
            <ImageWrapper
              onClick={() => handleCityChange('cdmx')}
            >
              <StyledImage src={CdmxImage} alt="Visit Mexico City, Mexico" fill />
              <StyledCityName weight="semibold" size="lg">Mexico City</StyledCityName>
            </ImageWrapper>
            <ImageWrapper
              onClick={() => handleCityChange('mty')}
            >
              <StyledImage src={MtyImage} alt="Visit Monterrey, Mexico" fill />
              <StyledCityName weight="semibold" size="lg">Monterrey</StyledCityName>
            </ImageWrapper>
            <ImageWrapper
              onClick={() => handleCityChange('gdl')}
            >
              <StyledImage src={GdlImage} alt="Visit Guadalajara, Mexico" fill />
              <StyledCityName weight="semibold" size="lg">Guadalajara</StyledCityName>
            </ImageWrapper>
          </StyledCities>
        </Stack>
        <StyledBanner>
          <Stack direction="column" css={{ width: 420, flexShrink: 0, spaceY: 32 }}>
            <Text as="span" size="xl" weight="semibold" css={{ display: 'inline-block' }}>
              Easily find places to have <Text as="span" weight="semibold" size="xl" css={{ color: '$slate500' }}>breakfast</Text>, <Text as="span" weight="semibold" size="xl" css={{ color: '$slate500' }}>lunch</Text> or <Text as="span" weight="semibold" size="xl" css={{ color: '$slate500' }}>dinner</Text> from our partners or local businesses.
            </Text>
            <Text size="sm" css={{ color: '$slate600' }}>
              Popular search: Starbucks, Fishing, Tacos...
            </Text>
          </Stack>
          <PlaceholderWrapper>
            <Image
              src={PlaceholderBanner}
              alt="Discover more places to breakfast, lunch or dinner" />
          </PlaceholderWrapper>
        </StyledBanner>
        <Stack direction="column" css={{ spaceY: 16, width: '100%' }}>
          <Text as="h2" weight="semibold" size="xl" css={{ marginTop: 32 }}>
            Browse by category
          </Text>
          <Categories>
            <CategoryBox
              direction="column"
              align="center"
              justify="center"
              css={{ spaceY: 8 }}
            >
              <Image src={Fishing} alt="Fishing Category" />
              <Text>Fishing</Text>
            </CategoryBox>
            <CategoryBox
              direction="column"
              align="center"
              justify="center"
              css={{ spaceY: 8 }}
            >
              <Image src={Burgers} alt="Burgers Category" />
              <Text>Burgers</Text>
            </CategoryBox>
            <CategoryBox
              direction="column"
              align="center"
              justify="center"
              css={{ spaceY: 8 }}
            >
              <Image src={Pizza} alt="Pizza Category" />
              <Text>Pizza</Text>
            </CategoryBox>
            <CategoryBox
              direction="column"
              align="center"
              justify="center"
              css={{ spaceY: 8 }}
            >
              <Image src={Bbq} alt="BBQ Category" />
              <Text>BBQ</Text>
            </CategoryBox>
          </Categories>
        </Stack>
      </Stack>
    </StyledWrapper>
  );
}

const StyledCities = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 12,
  width: '100%',
});

const StyledWrapper = styled('div', {
  pt: 32,
  width: '100%',
  overflowY: 'scroll',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
});

const ImageWrapper = styled('button', {
  position: 'relative',
  cursor: 'pointer',
  borderRadius: 12,
  overflow: 'hidden',
  height: 340,
  width: '100%',
  border: 0,
  '&:focus': {
    outline: '0 none',
  },
  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 42.19%, rgba(0, 0, 0, 0.65) 83.33%)',
  }
});

const StyledCityName = styled(Text, {
  position: 'absolute',
  display: 'block',
  width: '100%',
  bottom: 24,
  zIndex: 10,
  color: '$white',
  textAlign: 'center',
});

const StyledImage = styled(Image, {
  objectFit: 'cover',
  minHeight: 96,
});

const StyledBanner = styled(Stack, {
  position: 'relative',
  width: '100%',
  background: '$white',
  p: 24,
  border: '1px solid $slate300',
  borderRadius: 12,
  spaceX: 32,
  overflow: 'hidden',
});

const PlaceholderWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  right: -20,
});

const Categories = styled('div', {
  display: 'grid',
  width: '100%',
  gap: 12,
  gridTemplateColumns: 'repeat(4, 1fr)',
});

const CategoryBox = styled(Stack, {
  background: '$white',
  border: '1px solid $slate300',
  borderRadius: 12,
  px: 16,
  py: 12,
  width: '100%',
});
