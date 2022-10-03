import { styled } from '@stitches/config';

export const Tag = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  fontWeight: 500,
  variants: {
    size: {
      sm: { px: 4, py: 5, fontSize: 13, lineHeight: '8px', },
      base: { px: 6, py: 5, fontSize: 16, lineHeight: '12px', },
    },
    intent: {
      success: { background: '$success', color: '$white' },
      danger: { background: '$danger', color: '$white' },
      neutral: { background: '$neutral', color: '$white' },
      transparent: {
        background: 'transparent',
        color: '$slate700',
        border: '1px solid $slate300',
      },
    },
  },
  defaultVariants: {
    size: 'base',
    intent: 'neutral',
  },
});
