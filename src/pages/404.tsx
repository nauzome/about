import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="lg:col-start-3 lg:col-end-13">
        <div className="py-3 lg:py-10">
          <div className="grid gap-5 lg:py-5 lg:px-4 lg:rounded lg:border-2 lg:border-slate-300 lg:border-solid w-full ">
            <h1 className="text-2xl">Ops</h1>
            <pre>(´・ω・｀)</pre>
            <p>
              <Link
                href="/language"
                className="text-blue-700 dark:text-blue-400"
              >
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
