import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

import { Toaster } from "@src/components/ui/toaster";
import { api } from "@src/utils/api";

import type { AppType } from "next/app";

import "@src/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Chirp</title>
        <meta name="Chirp" content="Twitter with only Emojis" />
        <link rel="icon" href="logo/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
