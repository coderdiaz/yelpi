import { styled } from '@stitches/config';
import Text from '@components/Text';
import PlacesList from '@components/Sidebar/PlacesList';
import useSearchBusinesses from '@gqlyelp/hooks/use-search-businesses';
import useUi from '@hooks/use-ui';
import { locationSelector } from '@hooks/use-ui/selectors';
import SkeletonSidebar from 'skeletons/SkeletonSidebar';

export default function Sidebar() {
  const { latitude, longitude } = useUi(locationSelector);
  const { data } = useSearchBusinesses({
    latitude,
    longitude,
  });

  if (!data) {
    return <SkeletonSidebar />;
  }

  return (
    <StyledAside>
      <StyledSticky>
        <Text
          weight="semibold"
          css={{ color: '$slate700' }}
        >
          { data?.total } found places
        </Text>
      </StyledSticky>
      <PlacesList items={data?.business ?? []} />
    </StyledAside>
  );
}

const StyledSticky = styled('div', {
  position: 'sticky',
  top: 0,
  pt: 32,
  pb: 28,
  zIndex: 999,
  background: 'linear-gradient($slate100, $slate100 50%, $slate100 75%, transparent)',
});

const StyledAside = styled('aside', {
  pr: 32,
  pl: 4,
  borderRight: '1px solid $slate300',
  width: 428,
  overflowY: 'scroll',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
});
