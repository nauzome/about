import React from "react";
import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import LINESeedJP_OTF_Rg from "@next/font/local";

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
      <style jsx global>{`
        html {
          font-family: ${LINESeedJP_OTF_Rg_n.style.fontFamily};
        }
        .nz_mobile_bag {
          height: 100vh;
          height: 100svh;
          min-height: 100vh;
          min-height: 100svh;
        }
        .nz_contents {
          width: calc(100% - 0.5rem - 0.5rem);
          margin: 0 auto;
        }
      `}</style>
      <div className="overflow-y-auto nz_mobile_bag">
        <div className="grid gap-y-5 auto-rows-max max-w-4xl mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
