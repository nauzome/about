import Link from "next/link";
export default function Bar() {
  return (
    <header class="grid gap-4 border-y-2 border-slate-100 dark:border-white border-solid">
      <div className="py-2 nz_contents">
        <ul className="grid items-center gap-1 text-blue-700 dark:text-blue-400">
          <li>
            <a href="/assets.7z">Assets</a>
          </li>
          <li>
            <Link href="license">license</Link>
          </li>
          <li>
            <Link href="language">language</Link>
          </li>
          <li>
            <Link href="developer">developer</Link>
          </li>
          <li>
            <Link href="donation">donation</Link>
          </li>
        </ul>
        <p>2021-2023</p>
      </div>
    </header>
  );
}
