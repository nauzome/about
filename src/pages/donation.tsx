import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="lg:col-start-3 lg:col-end-13">
        <div className="py-3 lg:py-10">
          <div className="grid gap-5 lg:py-5 lg:px-4 lg:rounded lg:border-2 lg:border-slate-300 lg:border-solid w-full ">
            <h2 className="text-3xl">寄付</h2>

            <p>
              なお寄付された額や目的は
              <a className="text-blue-700 dark:text-blue-400" href="report">
                透明性レポート
              </a>
              で発行されます。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
