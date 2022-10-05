import type { GetServerSideProps } from 'next';
import { styled } from '@stitches/config';
import Header from '@components/Header';
import { Container } from '@components/Container';
import Sidebar from '@components/Sidebar';
import BodySection from '@components/BodySection';

function IndexPage() {
  return (
    <>
      <Header />
      <Main>
        <StyledContainer size="xl">
          <Sidebar></Sidebar>
          <Divisor />
          <BodySection></BodySection>
        </StyledContainer>
      </Main>
    </>
  );
}

const StyledContainer = styled(Container, {
  display: 'flex',
  spaceX: 32,
  height: '100%',
});

const Divisor = styled('div', {
  height: '100%',
  width: 1,
  background: '$slate300',
});

const Main = styled('main', {
  height: 'calc(100vh - 64px)',
  maxHeight: 'calc(100vh - 64px)',
});

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Setting secure HttpOnly cookie
  res.setHeader('set-cookie', 'x-allowed=true;httpOnly=true;sameSite=lax');

  return {
    props: {},
  };
}

export default IndexPage;
