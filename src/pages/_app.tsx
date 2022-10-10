import type { AppProps } from 'next/app';
import { globalCss } from '@stitches/config';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Added global styles
  globalStyles();

  return (
    <>
      <Head>
        <title>Yelpi — Restaurants, Dentists, Bars, Beauty Salons, Doctors</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  'html, body': {
    fontFamily: '$sans',
    background: '$slate100',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '.noscroll': { overflow: 'hidden' },
});
