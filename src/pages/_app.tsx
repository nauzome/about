import React from "react";
import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import LINESeedJP_OTF_Rg from "@next/font/local";
import Nav from "../../components/nav";
import Bar from "../../components/bar";

const LINESeedJP_OTF_Rg_n = LINESeedJP_OTF_Rg({
  src: "./LINESeedJP_OTF_Rg.woff",

  variable: "--kicho-jis",
});
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  React.useEffect(() => {
    if (router.asPath === "/") {
      router.push("/about");
    }
  }, [router.asPath]);
  return (
    <>
      <div className="overflow-y-auto nz_mobile_bag">
        <div className="nz_contents">
          <div className="grid lg:gap-4 lg:grid-cols-12">
            <Nav />
            <Component {...pageProps} />
          </div>
          <Bar />
        </div>
      </div>
    </>
  );
}
