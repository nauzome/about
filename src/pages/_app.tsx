import React from "react";
import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  React.useEffect(() => {
    if (router.asPath === "/") {
      router.push("/about");
    }
  }, [router.asPath]);
  return <Component {...pageProps} />;
}
