import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid gap-5 lg:py-5 lg:px-4 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid rounded w-full">
        <h2 className="text-3xl">サイトマップ</h2>
        <div>
          <h2 className="text-xl">通常のページ</h2>
          <ul className="list-decimal list-inside text-blue-700">
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/developer">Developer</a>
            </li>
            <li>
              <a href="/donation">donation</a>
            </li>
            <li>
              <a href="/ethics">ethics</a>
            </li>
            <li>
              <a href="/faq">faq</a>
            </li>
            <li>
              <a href="/history">history</a>
            </li>
            <li>
              <a href="/project">project</a>
            </li>
            <li>
              <a href="/report">report</a>
            </li>
            <li>
              <a href="/work">work</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">特別なページ</h2>
          <ul className="list-decimal list-inside text-blue-700">
            <li>
              <a href="/404">404</a>
            </li>
            <li>
              <a href="/language">language</a>
            </li>
            <li>
              <a href="/sitemap">sitemap</a>
            </li>
            <li>
              <a href="/license">license</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
