import type { GetServerSideProps } from 'next';
import { styled } from '@stitches/config';
import Header from '@components/Header';
import { Container } from '@components/Container';
import Sidebar from '@components/Sidebar';
import QuickStart from '@components/blocks/QuickStart';

function IndexPage() {
  return (
    <>
      <Header />
      <Main>
        <StyledContainer size="xl">
          <Sidebar />
          <StyledBodySection>
            <QuickStart />
          </StyledBodySection>
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

const Main = styled('main', {
  height: 'calc(100vh - 66px)',
  maxHeight: 'calc(100vh - 66px)',
});

const StyledBodySection = styled('section', {
  width: '100%',
});

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Setting secure HttpOnly cookie
  res.setHeader('set-cookie', 'x-allowed=true;httpOnly=true;sameSite=lax');

  return {
    props: {},
  };
}

export default IndexPage;
