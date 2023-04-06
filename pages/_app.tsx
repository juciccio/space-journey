import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Theme from '../styles/theme';
import defaultSeo from '../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </Theme>
  );
}
