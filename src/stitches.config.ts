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
      // Gray
      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#1f2937',
      gray800: '#1f2937',
      gray900: '#111827',
    },
  },
  utils: {
    mx: (value: number) => ({ marginLeft: value, marginRight: value }),
    my: (value: number) => ({ marginTop: value, marginBottom: value }),
    p: (value: number) => ({ padding: value }),
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
