import type { AppProps } from 'next/app';
import { globalCss } from '@stitches/config';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Added global styles
  globalStyles();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});
