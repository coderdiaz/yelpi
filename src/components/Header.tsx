import { styled } from '@stitches/config';
import { Container } from '@components/Container';
import Logotype from '@components/Logotype';

export default function Header() {
  return (
    <StyledHeader>
      <Container size="xl" css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Logotype />
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled('header', {
  background: '$white',
  borderBottom: '1px solid $slate300',
  py: 12,
});
