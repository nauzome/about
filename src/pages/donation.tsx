import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <div className="nz_contents">
        <div className="grid gap-4">
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
      <Bar />
    </>
  );
}
