import { styled } from '@stitches/config';
import type { CSS } from '@stitches/config';
import { createElement } from 'react';

type StackProps = {
  children?: React.ReactNode;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  css?: CSS;
}

export default function Stack({
  children,
  ...props
}: StackProps) {
  const StyledStack = styled('div', {
    display: 'flex',
    variants: {
      direction: {
        row: { flexDirection: 'row' },
        column: { flexDirection: 'column' },
        'column-reverse': { flexDirection: 'column-reverse' },
        'row-reverse': { flexDirection: 'row-reverse' },
      },
      justify: {
        start: { justifyContent: 'start' },
        end: { justifyContent: 'end' },
        center: { justifyContent: 'center' },
        stretch: { justifyContent: 'stretch' },
      },
      align: {
        start: { alignItems: 'start' },
        end: { alignItems: 'end' },
        center: { alignItems: 'center' },
        stretch: { alignItems: 'stretch' },
        baseline: { alignItems: 'baseline' },
      }
    },
    defaultVariants: {
      direction: 'row',
      justify: 'start',
      align: 'start',
    },
  });

  return createElement(
    StyledStack,
    { ...props },
    children,
  );
}