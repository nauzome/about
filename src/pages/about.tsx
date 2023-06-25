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
        <div className="relative w-full h-screen bg-maxblue overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/ba1110da8ecc4aa8298f89107c80aa22.webp"
              width="1500"
              height="1500"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 w-full h-full">
            <div className="flex w-full h-5/6">
              <div className="text-white m-auto">
                <h2 className="my-4 text-3xl md:text-5xl">About</h2>
                <ul className="grid grid-cols-2 lg:grid-cols-5 items-center gap-x-2 text-xl md:text-2xl">
                  <li>
                    <Link
                      type="submit"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      about
                    </Link>
                  </li>
                  <li>
                    <a href="https://blog.nauzome.com/">Blog</a>
                  </li>
                  <li>
                    <Nextlink href="faq">faq</Nextlink>
                  </li>
                  <li>
                    <Nextlink href="avatar">avatar</Nextlink>
                  </li>
                  <li>
                    <Nextlink href="donation">Donation</Nextlink>
                  </li>
                  <li>
                    <Nextlink href="project">project</Nextlink>
                  </li>
                  <li>
                    <Nextlink href="ethics">ethics</Nextlink>
                  </li>
                  <li>
                    <Nextlink href="history">history</Nextlink>
                  </li>
                  <li>
                    <Nextlink href="license">license</Nextlink>
                  </li>
                  <li>
                    <a href="language">language</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center text-white text-2xl md:text-3xl text-center h-1/6">
              <div className="animate-bounce">
                <Link
                  type="submit"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span className="bi bi-arrow-down-circle"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 relative grid max-w-6xl w-full mx-auto" id="about">
          <div className="my-3">
            <div className="text-center mx-2.5">
              <div className="grid gap-20 my-20">
                <p className="text-4xl text-3xl max-w-xl mx-auto">
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
                <div className="relative mx-auto max-w-xs w-full nz_nzlogo">
                  <Image
                    src="/e947026001ce5b67b1f43ea570b891e4.webp"
                    alt=""
                    width="500"
                    height="500"
                    className="w-full bg-blue-100 dark:bg-gray-800 lg:shadow-xl shadow-black/10"
                  ></Image>
                </div>
                <div className="mx-auto w-max">
                  <ul className="grid sm:flex gap-2 items-center text-blue-700 dark:text-blue-400">
                    <li className="block p-2 bg-blue-100 dark:bg-gray-800">
                      <a href="https://misskey.pm/@nz">misskey</a>
                    </li>
                    <li className="block p-2 bg-blue-100 dark:bg-gray-800">
                      <a href="mailto:nauzome@nauzome.com">Email</a>
                    </li>
                    <li className="block p-2 bg-blue-100 dark:bg-gray-800">
                      <a href="tel:+81 7084122063">signal</a>
                    </li>
                    <li className="block p-2 bg-blue-100 dark:bg-gray-800">
                      <a href="/certification/meta.json">もっと</a>
                    </li>
                  </ul>
                </div>
                <p className="text-4xl text-3xl max-w-xl mx-auto">
                  <span className="nz_about_bin block text-3xl"></span>
                  <span className="underline decoration-black dark:decoration-white decoration-solid">
                    Edward Snowden,Pavel Durov,Philip
                    Zimmermannを尊敬しています。
                  </span>
                  <span className="nz_about_subbin block text-3xl"></span>
                </p>
                <div className="relative mx-auto max-w-xs w-full nz_nzlogo">
                  <Image
                    src="/3c6e0b8a9c15224a8228b9a98ca1531d.webp"
                    alt=""
                    width="500"
                    height="500"
                    className="w-full"
                  ></Image>
                </div>
                <p className="text-4xl text-3xl max-w-xl mx-auto">
                  <span className="nz_about_bin block text-3xl"></span>
                  <span className="underline decoration-black dark:decoration-white decoration-solid">
                    暗号学を学びたいと思ったり。
                  </span>
                  <span className="nz_about_subbin block text-3xl"></span>
                </p>
              </div>
            </div>
          </div>
          <Bar />
        </div>
      </>
    );
  }
}
export default ScrollButton;
