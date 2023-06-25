import Link from "next/link";
export default function Bar() {
  return (
    <header class="my-2 bg-blue-100 dark:bg-gray-800">
      <div className="p-4 grid gap-2">
        <ul className="grid lg:flex items-center gap-3 text-blue-700 dark:text-blue-400">
          <li>
            <a href="/assets.7z">
              assets
            </a>
          </li>
          <li>
            <a
              class="text-blue-700 dark:text-blue-400"
              href="https://about.nauzome.com"
            >
              onion..
            </a>
          </li>
          <li>
            <a href="/certification/meta.json">
              連絡先
            </a>
          </li>
          <li>
            <Link href="developer">
            developer
            </Link>
          </li>
          <li>
            <Link href="sdgs">
              SDGS
            </Link>
          </li>
        </ul>
        <p>2021-2023</p>
      </div>
    </header>
  );
}
