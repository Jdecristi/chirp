import type { AppType } from "next/app";

import { ClerkProvider } from "@clerk/nextjs";
import { api } from "@src/utils/api";

import "@src/styles/globals.css";
import { Toaster } from "@src/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      <Toaster />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
