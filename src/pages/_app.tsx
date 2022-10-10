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
        <meta property="og:title" content="Yelpi — Restaurants, Dentists, Bars, Beauty Salons, Doctors" />
        <meta property="og:description" content="Easily find placeds to have breakfast, lunch or dinner from our partners or local businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yelpi.coderdiaz.dev/cover.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@coderdiaz" />
        <meta name="twitter:title" content="Yelpi — Restaurants, Dentists, Bars, Beauty Salons, Doctors" />
        <meta name="twitter:description" content="Easily find placeds to have breakfast, lunch or dinner from our partners or local businesses" />
        <meta name="twitter:image" content="https://yelpi.coderdiaz.dev/cover.png" />
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
