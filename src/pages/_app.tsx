import type { AppProps } from "next/app";

import {
  MoralisProvider,
  MoralisProviderInitializedProps,
} from "react-moralis";

import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // @ts-ignore
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
};

export default MyApp;
