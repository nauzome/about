import React from 'react';
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Typed from 'typed.js';
function ScrollButton() {
  return (
    <>
      <span className="z-30 absolute top-0 right-0"><Link href="faq"><span className="block bg-white p-7 nz_top"><img src="/media/syougatsu_kagamimochi.png" className="nz_top_c w-12 h-12" /></span></Link></span>
      <div className="s-bg">
        <img className='z-10 absolute w-full h-full object-cover overflow-hidden' src="/media/rahmen.jpg" alt="rahmen.jpg" />
        <div className="z-20 absolute w-full h-full ltr" dir="ltr">
          <div className="grid gap-3 grid-rows-6 nz_contents h-full max-w-6xl mx-auto">
            <div className="relative flex row-start-1 row-end-6 max-w-5xl h-48 my-auto mx-4">
              <span className='absolute bottom-0'>
                <span className="grid gap-3 my-auto text-5xl text-white"><p>ラーメンは美味しい</p></span>
              </span>
            </div>
            <span className="row-start-6 row-end-7 max-w-sm mx-4">
              <ul className="flex flex-wrap gap-5 justify-self-center text-white">
                <li>
                  <a href="/about">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-search"></i>
                      <span>about</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://blog.nauzome.com">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-at"></i>
                      <span>blog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link href="faq">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-question-circle"></i>
                      <span>faq</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="project">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-life-preserver"></i>
                      <span>Project</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-person-lines-fill"></i>
                      <span>contact</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="work">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-emoji-kiss"></i> <span>work</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="history">
                    <div className="flex justify-self-center gap-2">
                      <i className="bi bi-clock-history"></i>
                      <span>history</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ScrollButton;
