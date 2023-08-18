import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nextlink from "next/link";

const inter = Inter({ subsets: ["latin"] });

class ScrollButton extends React.Component {
  render() {
    return (
      <>
        <div className="grid gap-5 lg:py-5 lg:px-4 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid rounded w-full">
          <div className="text-xl">
            <p>やあ、私のサイトです。</p>
            <p>私はなうぞめといいます。好きなものはチキンとパスタです。</p>
            <p>私はインターネットを愛しています。</p>
            <p>以下が私です。</p>
          </div>
          <img src="/me.jpg" alt="" className="w-full" />
        </div>
      </>
    );
  }
}
export default ScrollButton;
