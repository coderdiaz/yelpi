import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import Modal from '@components/Modal';
import Details from './Details';
import useUi from '@hooks/use-ui';
import { setSelectedPlaceSelector } from '@hooks/use-ui/selectors';
import useMediaQuery from '@hooks/use-media-query';

type MobileDetailsModalProps = {
  showDetailsModal?: boolean;
  setShowDetailsModal: Dispatch<SetStateAction<boolean>>;
}

function DetailsModalHelper({
  showDetailsModal = false,
  setShowDetailsModal,
}: MobileDetailsModalProps) {
  return (
    <Modal
      showModal={showDetailsModal}
      setShowModal={setShowDetailsModal}
    >
      <Details />
    </Modal>
  )
}

export default function useMobileDetails() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const changeSelectedId = useUi(setSelectedPlaceSelector);

  useEffect(() => {
    if (!showDetailsModal && isMobile) {
      changeSelectedId(null);
    }
  }, [showDetailsModal]);

  const MobileDetailsModal = useCallback(() => {
    return (
      <DetailsModalHelper
        showDetailsModal={showDetailsModal}
        setShowDetailsModal={setShowDetailsModal}
      />
    );
  }, [showDetailsModal, setShowDetailsModal]);

  return useMemo(
    () => ({ setShowDetailsModal, MobileDetailsModal }),
    [setShowDetailsModal, MobileDetailsModal]
  );
}