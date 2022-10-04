import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import SearchIcon from '@components/icons/Search';

export default function Search() {
  return (
    <Stack>
      <InputWrapper>
        <SearchIcon css={{ color: '$slate500', position: 'absolute', top: 10, left: 10 }} />
        <StyledInput placeholder="Search for tacos, cheap dinner, seafood ..." />
      </InputWrapper>
    </Stack>
  );
}

const InputWrapper = styled('div', {
  position: 'relative',
});

const StyledInput = styled('input', {
  all: 'unset',
  minWidth: 320,
  pl: 36,
  pr: 12,
  py: 10,
  fontSize: 15,
});
