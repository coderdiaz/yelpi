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
  theme: {
    colors: {
      // Base
      white: '#ffffff',
      black: '#000000',
      // Slate
      slate50: '#f8fafc',
      slate100: '#f1f5f9',
      slate200: '#e2e8f0',
      slate300: '#cbd5e1',
      slate400: '#94a3b8',
      slate500: '#64748b',
      slate600: '#475569',
      slate700: '#334155',
      slate800: '#1e293b',
      slate900: '#0f172a',
      // Intents
      success: '#54C693',
      warning: '#FFB950',
      danger: '#A04022',
      neutral: '#64748b',
    },
    fonts: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  utils: {
    mx: (value: number) => ({ marginLeft: value, marginRight: value }),
    my: (value: number) => ({ marginTop: value, marginBottom: value }),
    p: (value: number) => ({ padding: value }),
    pt: (value: number) => ({ paddingTop: value }),
    pb: (value: number) => ({ paddingBottom: value }),
    pl: (value: number) => ({ paddingLeft: value }),
    pr: (value: number) => ({ paddingRight: value }),
    px: (value: number) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: number) => ({ paddingTop: value, paddingBottom: value }),
    spaceY: (value: number) => ({ '> :not([hidden]) ~ :not([hidden])': {
      marginTop: value,
      marginBottom: 0,
    }}),
    spaceX: (value: number) => ({ '> :not([hidden]) ~ :not([hidden])': {
      marginLeft: value,
      marginRight: 0,
    }}),
  },
});
