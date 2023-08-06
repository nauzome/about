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
import Nav from "../../components/nav";
import Bar from "../../components/bar";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nextlink from "next/link";

const inter = Inter({ subsets: ["latin"] });

class ScrollButton extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="nz_contents">
          <p className="text-center text-4xl text-3xl max-w-xl mx-auto">
            <span className="nz_about_bin block text-3xl"></span>
            <span className="underline decoration-black dark:decoration-white decoration-solid">
              私はなうぞめと言います。
              <br />
              好奇心に溢れた技術者であり、わからない事を大切にしています。
              <br />
              良い意味で手段を選ばない事です。
            </span>
            <span className="nz_about_subbin block text-3xl"></span>
          </p>
          <div className="max-w-sm mx-auto p-xl bg-blue-100 dark:bg-gray-800 rounded">
            <Image
              src="/e947026001ce5b67b1f43ea570b891e4.webp"
              width="1000"
              height="1000"
              alt=""
              className="w-full"
            ></Image>
          </div>
          <div>
            <p className="text-center text-4xl text-3xl max-w-xl mx-auto">
              <span className="nz_about_bin block text-3xl"></span>
              <span className="underline decoration-black dark:decoration-white decoration-solid">
                Edward Snowden,Pavel Durov,Philip Zimmermannを尊敬しています。
              </span>
              <span className="nz_about_subbin block text-3xl"></span>
            </p>
          </div>
          <div>
            <div className="w-max mx-auto py-2 px-3 bg-blue-100 dark:bg-gray-800 text-4xl rounded">
              <a href="/faq">More.</a>
            </div>
          </div>
        </div>
        <Bar />
      </>
    );
  }
}
export default ScrollButton;
