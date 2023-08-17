import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid gap-5 lg:py-5 lg:px-4 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid w-full">
        <h1 className="text-2xl">Ops</h1>
        <pre>(´・ω・｀)</pre>
        <p>
          <Link href="/language" className="text-blue-700 dark:text-blue-400">
            here
          </Link>
          .
        </p>
      </div>
    </>
  );
}
