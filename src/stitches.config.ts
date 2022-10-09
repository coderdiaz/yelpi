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
      // Orange
      orange50: '#FFF7ED',
      orange100: '#FFEDD5',
      orange200: '#FED7AA',
      orange300: '#FDBA74',
      orange400: '#FB923C',
      orange500: '#F97316',
      orange600: '#EA580C',
      orange700: '#C2410C',
      orange800: '#9A3412',
      orange900: '#7C2D12',
      // Intents
      success: '#54C693',
      warning: '#FFB950',
      danger: '#A04022',
      neutral: '#64748b',
    },
    shadows: {
      ring: `
          inset 0 0 0 0px #cbd5e1,
          inset 0 0 0 1px #cbd5e1,
          0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)
      `,
      ringEnabled: `
          inset 0 0 0 1px #c2410c,
          0 0 0 3px #FED7AA70,
          0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05);
      `,
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
