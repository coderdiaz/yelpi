import { styled } from '@stitches/config';
import { Container } from '@components/Container';
import Logotype from '@components/Logotype';
import Stack from '@components/Stack';
import SearchBar from '@components/SearchBar';

export default function Header() {
  return (
    <StyledHeader>
      <Container size="xl" css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Stack css={{ spaceX: 12 }}>
          <Logotype />
          <SearchBar />
        </Stack>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled('header', {
  background: '$white',
  borderBottom: '1px solid $slate300',
  py: 12,
});
