import Nav from "../../components/nav";
import Bar from "../../components/bar";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Nav />
      <div className="nz_contents">
        <div className="grid gap-4">
          <div>
            <p>
              なお、国旗は利用者が多い地域を示したものでありそれ以上ではありません。
            </p>
            <p>
              なお、データーは2023-06-24
              23:25頃の物であり変動している可能性があります。
            </p>
          </div>
          <div>
            <div className="grid gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-100 dark:bg-gray-800 rounded">
                <div className="p-3 dark:border-slate-500">
                  <Link
                    href="about"
                    locale="ja"
                    className="flex sm:grid gap-2 grid-cols-2 sm:grid-cols-3 items-center"
                  >
                    <span className="fi fi-jp text-5xl"></span>
                    <span className="sm:col-span-2 text-2xl">日本語</span>
                  </Link>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-gray-800 rounded">
                <div className="p-3 dark:border-slate-500">
                  <Link
                    href="about"
                    locale="en"
                    className="flex sm:grid gap-2 grid-cols-2 sm:grid-cols-3 items-center"
                  >
                    <span className="fi fi-us text-5xl"></span>
                    <span className="sm:col-span-2 text-2xl">English</span>
                  </Link>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-gray-800 rounded">
                <div className="p-3 dark:border-slate-500">
                  <Link
                    href="about"
                    locale="ko"
                    className="flex sm:grid gap-2 grid-cols-2 sm:grid-cols-3 items-center"
                  >
                    <span className="fi fi-kr text-5xl"></span>
                    <span className="sm:col-span-2 text-2xl">한국어</span>
                  </Link>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-gray-800 rounded">
                <div className="p-3 dark:border-slate-500">
                  <Link
                    href="about"
                    locale="zh-tw"
                    className="flex sm:grid gap-2 grid-cols-2 sm:grid-cols-3 items-center"
                  >
                    <span className="fi fi-cn text-5xl"></span>
                    <span className="sm:col-span-2 text-2xl">简体中文</span>
                  </Link>
                </div>
              </div>
              <div className="bg-blue-100 dark:bg-gray-800 rounded">
                <div className="p-3 dark:border-slate-500">
                  <Link
                    href="about"
                    locale="zh-tw"
                    className="flex sm:grid gap-2 grid-cols-2 sm:grid-cols-3 items-center"
                  >
                    <span className="fi fi-cn text-5xl"></span>
                    <span className="sm:col-span-2 text-2xl">中國傳統的</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bar />
    </>
  );
}
