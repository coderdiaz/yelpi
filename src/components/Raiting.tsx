import { styled, CSS} from '@stitches/config';
import Stack from '@components/Stack';
import StarIcon from '@components/icons/Star';

type RaintingProps = {
  value?: number;
  css?: CSS;
  dark?: boolean;
}

export default function Raiting({
  value,
  css,
  dark = false,
}: RaintingProps) {
  const percentage = Math.round((value / 5) * 100);

  const StyledRaiting = styled(Stack, {
    ...css,
    position: 'relative',
    spaceX: 4,
    variants: {
      dark: {
        true: { color: '$white' },
        false: {},
      },
    },
    defaultVariants: {
      dark: false,
    }
  });

  return (
    <StyledRaiting align="center" dark={dark}>
      <RaitingValue>{value.toFixed(1)}</RaitingValue>
      <RaintingStars>
        {Array.from(Array(5).keys()).map((_, idx) => (
          <StarIcon key={idx} />
        ))}
        <Overlay dark={dark} css={{ width: `${100 - (percentage+1.68)}%` }} />
      </RaintingStars>
    </StyledRaiting>
  )
}

const RaitingValue = styled('span', {
  display: 'inline-block',
  fontWeight: 600,
});

const RaintingStars = styled(Stack, {
  spaceX: 0,
  color: '$warning',
});

const Overlay = styled('div', {
  opacity: 0.7,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  variants: {
    dark: {
      true: { background: '$black' },
      false: { background: '$white' },
    }
  }
});
