import { styled } from '@stitches/config';
import Text from '@components/Text';
import PlacesList from '@components/Sidebar/PlacesList';
import useSearchBusinesses from '@gqlyelp/hooks/use-search-businesses';
import SkeletonPlaceList from './SkeletonPlaceList';

export default function Sidebar() {
  const { data } = useSearchBusinesses({
    latitude: 19.44216,
    longitude: -99.156579,
  });

  return (
    <StyledAside>
      <StyledSticky>
        <Text
          weight="semibold"
          css={{
            color: '$slate700',
          }}
        >
          { data?.total } found places
        </Text>
      </StyledSticky>
      { !data
          ? <SkeletonPlaceList />
          : <PlacesList items={data?.business ?? []} />}
    </StyledAside>
  );
}

const StyledSticky = styled('div', {
  position: 'sticky',
  top: 0,
  pt: 32,
  pb: 32,
  zIndex: 999,
  background: 'linear-gradient($slate100, $slate100 50%, $slate100 75%, transparent)',
});

const StyledAside = styled('aside', {
  pr: 32,
  borderRight: '1px solid $slate300',
  width: 456,
  overflowY: 'scroll',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
});
