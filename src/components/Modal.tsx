import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import type { PanInfo } from 'framer-motion'
import { styled } from '@stitches/config';

type ModalProps = {
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  children,
  showModal = false,
  setShowModal,
}: ModalProps) {
  const modalRef = useRef(null);
  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    const body = document.body;
    if (showModal) {
      body.classList.add('noscroll');
    }
  }, [showModal]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const controls = useAnimation();
  const transitionProps = { type: 'spring', stiffness: 500, damping: 30 };
  useEffect(() => {
    controls.start({
      y: 0,
      transition: transitionProps,
    });
  }, []);

  async function handleDragEnd(_: MouseEvent | PointerEvent | TouchEvent, info: PanInfo) {
    const body = document.body;
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height = modalRef.current.getBoundingClientRect().height;

    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      closeModal();
      body.classList.toggle('noscroll');
    } else {
      controls.start({ y: 0, transition: transitionProps });
    }
  }

  return (
    <AnimatePresence>
      { showModal
          ? <>
              <StyledModal
                ref={modalRef}
                initial={{ y: '100%' }}
                animate={controls}
                exit={{ y: '100%' }}
                transition={transitionProps}
                drag="y"
                dragDirectionLock
                onDragEnd={handleDragEnd}
                dragElastic={{ top: 0, bottom: 1 }}
                dragConstraints={{ top: 0, bottom: 0 }}
              >
                <StyledDragger>
                  <RoundedLine />
                </StyledDragger>
                <StyledContent>
                  {children}
                </StyledContent>
              </StyledModal>
              <Backdrop
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </>
          : null }
    </AnimatePresence>
  );
}

const StyledModal = styled(motion.div, {
  position: 'fixed',
  width: '100vw',
  cursor: 'grab',
  overflow: 'scroll',
  zIndex: 9999,
  '&:active': {
    cursor: 'grabbing',
  },
  bottom: 0,
});

const StyledDragger = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$white',
  width: '100%',
  height: 32,
  borderTop: '1px solid $slate300',
  marginBottom: -1,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
});

const RoundedLine = styled('div', {
  borderRadius: 9999,
  height: 4,
  width: 24,
  background: '$slate300',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});

const StyledContent = styled('div', {
  background: '$white',
  overflowY: 'scroll',
});

const Backdrop = styled(motion.div, {
  position: 'fixed',
  zIndex: 30,
  width: '100%',
  height: '100%',
  background: '#f1f5f910',
  backdropFilter: 'blur(8px)',
});
