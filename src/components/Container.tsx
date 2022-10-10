import { styled } from '@stitches/config';

export const Container = styled('div', {
  position: 'relative',
  margin: '0 auto',
  px: 12,
  '@md': {
    px: 12,
  },
  variants: {
    size: {
      fluid: { width: '100%' },
      sm: { maxWidth: 640 },
      md: { maxWidth: 768 },
      lg: { maxWidth: 1024 },
      xl: { maxWidth: 1280 },
      '2xl': { maxWidth: 1480 },
    },
  },
  defaultVariants: {
    size: 'fluid',
  },
})