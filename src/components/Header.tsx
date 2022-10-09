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
        <Stack align="center" css={{ spaceX: 24 }}>
          <Link>For business</Link>
          <Stack align="center" css={{ spaceX: 8 }}>
            <Button>Sign In</Button>
            <Button intent="primary">Create an account</Button>
          </Stack>
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

const Link = styled('a', {
  display: 'inline',
  fontWeight: 500,
});

const Button = styled('button', {
  cursor: 'pointer',
  px: 16,
  py: 10,
  borderRadius: 12,
  borderWidth: 1,
  borderStyle: 'solid',
  fontSize: 16,
  variants: {
    intent: {
      primary: { background: '$slate800', borderColor: '$slate800', color: '$white' },
      secondary: { background: '$white', borderColor: '$slate400' },
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
});
