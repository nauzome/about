import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid gap-5 lg:py-5 lg:px-4 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid rounded w-full">
        <h2 className="text-3xl">寄付</h2>

        <p>
          なお寄付された額や目的は
          <a className="text-blue-700 dark:text-blue-400" href="report">
            透明性レポート
          </a>
          で発行されます。
        </p>
      </div>
    </>
  );
}
