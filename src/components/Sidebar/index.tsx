import { styled } from '@stitches/config';
import Text from '@components/Text';
import PlacesList from '@components/Sidebar/PlacesList';

export default function Sidebar() {
  return (
    <StyledAside>
      <Text
        weight="semibold"
        css={{
          color: '$slate700',
        }}
      >
        9,544 found places
      </Text>
      <PlacesList />
    </StyledAside>
  );
}

const StyledAside = styled('aside', {
  py: 32,
  width: 412,
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  spaceY: 20,
});
