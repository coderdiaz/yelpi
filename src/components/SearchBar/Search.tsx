import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import SearchIcon from '@components/icons/Search';

export default function Search() {
  return (
    <Stack css={{
      width: '100%',
      display: 'none',
      '@md': {
        display: 'flex',
      },
    }}>
      <InputWrapper>
        <SearchIcon css={{ color: '$slate500', position: 'absolute', top: 10, left: 4 }} />
        <StyledInput placeholder="Search for tacos, cheap dinner, seafood ..." />
      </InputWrapper>
    </Stack>
  );
}

const InputWrapper = styled('div', {
  position: 'relative',
  width: '100%',
});

const StyledInput = styled('input', {
  minWidth: 'auto',
  width: '100%',
  pl: 32,
  pr: 12,
  py: 10,
  fontSize: 15,
  border: 0,
  '&:focus': {
    outline: '0 none',
  },
});
