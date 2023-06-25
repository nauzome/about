import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Ops</h1>
      <p>
        <Link href="/language" className="text-blue-700 dark:text-blue-400">
          here
        </Link>
        .
      </p>
    </>
  );
}
