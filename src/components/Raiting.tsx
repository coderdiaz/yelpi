import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import StarIcon from '@components/icons/Star';

type RaintingProps = {
  value?: number;
}

export default function Raiting({
  value,
}: RaintingProps) {
  const percentage = Math.round((value / 5) * 100);

  return (
    <StyledRaiting>
      <RaitingValue>{value}</RaitingValue>
      <RaintingStars>
        {Array.from(Array(5).keys()).map((_, idx) => (
          <StarIcon key={idx} />
        ))}
        <Overlay css={{ width: `${100 - (percentage+1.68)}%` }} />
      </RaintingStars>
    </StyledRaiting>
  )
}

const StyledRaiting = styled(Stack, {
  position: 'relative',
  spaceX: 4,
});

const RaitingValue = styled('span', {
  display: 'inline-block',
  fontWeight: 600,
});

const RaintingStars = styled(Stack, {
  spaceX: 0,
  color: '$warning',
});

const Overlay = styled('div', {
  background: '$white',
  opacity: 0.7,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});
