import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="border-b-2 border-slate-100 dark:border-white border-solid my-3 py-3">
      <div className="nz_contents">
        <ul className="grid sm:grid-flow-col sm:auto-cols-min justify-self-center gap-3 py-1.5 ">
          <li className="py-2 px-3 bg-blue-100 dark:bg-gray-800 rounded">
            <Link href="about">about</Link>
          </li>
          <li className="py-2 px-3 bg-blue-100 dark:bg-gray-800 rounded">
            <Link href="faq">faq</Link>
          </li>
          <li className="py-2 px-3 bg-blue-100 dark:bg-gray-800 rounded">
            <Link href="ethics">ethics</Link>
          </li>
          <li className="py-2 px-3 bg-blue-100 dark:bg-gray-800 rounded">
            <Link href="project">project</Link>
          </li>
          <li className="py-2 px-3 bg-blue-100 dark:bg-gray-800 rounded">
            <a href="/certification/meta.json">contact</a>
          </li>
          <li className="py-2 px-3 bg-blue-100 dark:bg-gray-800 rounded">
            <Link href="history">history</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
