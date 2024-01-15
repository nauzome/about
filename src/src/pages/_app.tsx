import React from "react";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { init } from "@socialgouv/matomo-next";

import Nav from "../../components/nav";
import Bar from "../../components/bar";
import About from "./about";
import E404 from "./404";


export default function App({ Component, pageProps }: AppProps) {
  console.log('%cHello Im Nauzome.', 'color:#dd2e44;font-size:3rem;');
  console.log('%c📷 https://nauzo.me/pf/ 📔 https://nauzo.me/mk/', 'color:#333;font-size:1.5rem;');
  const router = useRouter();
  React.useEffect(() => {
    if (router.asPath === "/") {
      router.push("/about");
    }
  }, [router.asPath]);
  React.useEffect(() => {
    init({ url: 'https://analytics.nauzome.com/', siteId: '2' });
  }, []);
  if (router.asPath == '/about') {
    return <About />;
  } else if (router.asPath == '/404') {
    return '404';
  } else {
    return (
      <>
        <Nav />
        <div className="my-5 mx-3 xl:mx-0">
          <div className="grid gap-5 z-10 relative max-w-5xl mx-auto">
            <Component {...pageProps} />
            <hr className="border-t-solid border-t-1 border-t-slate-300 dark:border-t-white dark:border-t-gray-600" />
            <Bar />
          </div>
        </div>
      </>
    );
  }
}