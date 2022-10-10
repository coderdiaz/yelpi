import { Suspense, useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import { breakpoints, styled } from '@stitches/config';
import Header from '@components/Header';
import { Container } from '@components/Container';
import Sidebar from '@components/Sidebar';
import QuickStart from '@components/blocks/QuickStart';
import useUi from '@hooks/use-ui';
import { selectedPlaceSelector } from '@hooks/use-ui/selectors';
import SkeletonBusiness from '@skeletons/SkeletonBusiness';
import useMobileDetails from '@hooks/use-mobile-details';
import useMediaQuery from '@hooks/use-media-query';
import Business from '@components/blocks/Business';

function IndexPage() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const selectedId = useUi(selectedPlaceSelector);
  const { setShowDetailsModal, MobileDetailsModal } = useMobileDetails();

  useEffect(() => {
      if (selectedId) {
        if (isMobile) {
          return setShowDetailsModal(true);
        }
      } else {
        return setShowDetailsModal(false);
      }
  }, [selectedId, isMobile]);

  return (
    <>
      { isMobile ? <MobileDetailsModal /> : null }
      <Header />
      <Main>
        <StyledContainer size="xl">
          <Sidebar />
          <StyledBodySection>
            { selectedId
                ? <Suspense fallback={<SkeletonBusiness />}>
                    <Business />
                  </Suspense>
                : <QuickStart /> }
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
  display: 'none',
  '@lg': {
    display: 'block',
  },
});

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Setting secure HttpOnly cookie
  res.setHeader('set-cookie', 'x-allowed=true;httpOnly=true;sameSite=lax');

  return {
    props: {},
  };
}

export default IndexPage;
