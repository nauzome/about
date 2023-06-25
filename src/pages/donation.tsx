import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="z-10 relative grid max-w-6xl w-full mx-auto">
        <Nav />
        <div className="my-3">
          <div className="relative w-full aspect-video my-4 bg-maxblue overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/da984e42a5899bbdac496ef0cbadcee2.webp"
                width="1500"
                height="1500"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">Donation</h2>
            </div>
          </div>
          <p>
            なお寄付された額や目的は
            <a className="text-blue-700 dark:text-blue-400" href="report">
              透明性レポート
            </a>
            で発行されます。
          </p>
        </div>
        <Bar />
      </div>
    </>
  );
}
