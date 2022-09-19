import { createStitches } from '@stitches/react';
export type { CSS, VariantProps, CSSProperties } from '@stitches/react';

export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
};

export const { styled, getCssText, globalCss, css, keyframes } = createStitches({
  media: {
    ...breakpoints,
  },
  theme: {},
  utils: {},
});
