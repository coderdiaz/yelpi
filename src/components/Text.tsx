import { createElement } from 'react';
import { styled } from '@stitches/config';
import type { CSS } from '@stitches/config';

type TextProps = {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold',
  children?: React.ReactNode;
  css?: CSS;
}

const defaultStyles = {
  p: {},
  span: { display: 'inline-block' },
};

export default function Text({
  as = 'p',
  children,
  ...props
}: TextProps) {
  const StyledElement = styled(as, {
    ...defaultStyles[as],
    variants: {
      size: {
        sm: { fontSize: 14 },
        base: { fontSize: 16 },
        lg: { fontSize: 18 },
        xl: { fontSize: 20 },
      },
      weight: {
        normal: { fontWeight: 400 },
        medium: { fontWeight: 500 },
        semibold: { fontWeight: 600 },
        bold: { fontWeight: 700 },
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
    },
  });

  return createElement(
    StyledElement,
    { ...props },
    children,
  );
};