import { styled } from '@stitches/config';
import { Container } from '@components/Container';
import Text from '@components/Text';

export default function Header() {
  return (
    <StyledHeader>
      <Container size="lg" css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text>PlacesFinder</Text>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled('header', {
  borderBottom: '1px solid $gray200',
  py: 12,
});
