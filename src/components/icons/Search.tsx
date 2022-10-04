import { CSS, styled } from '@stitches/config';

type IconProps = {
  size?: number;
  css?: CSS;
}

export default function SearchIcon({
  size = 20,
  ...props
}: IconProps) {
  return (
    <StyledSvg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.042 16.042l-3.125-3.125m-8.959-3.75a5.208 5.208 0 1110.417 0 5.208 5.208 0 01-10.417 0z" />
    </StyledSvg>
  );
}

const StyledSvg = styled('svg', {});
