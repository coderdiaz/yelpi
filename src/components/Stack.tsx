import { createElement, forwardRef } from 'react';
import { styled } from '@stitches/config';
import type { CSS } from '@stitches/config';

type StackProps = {
  children?: React.ReactNode;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  css?: CSS;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, ...props }, forwardedRef) => {
    const StyledStack = styled('div', {
      display: 'flex',
      position: 'relative',
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
      { ...props, ref: forwardedRef },
      children,
    );
  }
);

export default Stack;
