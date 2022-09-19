import { styled } from '@stitches/config';

export const Container = styled('div', {
  position: 'relative',
  margin: '0 auto',
  px: 4,
  variants: {
    size: {
      fluid: { width: '100%' },
      sm: { maxWidth: 640 },
      md: { maxWidth: 768 },
      lg: { maxWidth: 1024 },
      xl: { maxWidth: 1280 },
    },
  },
  defaultVariants: {
    size: 'fluid',
  },
})