import Link from "next/link";
export default function Bar() {
  return (
    <header class="grid gap-4 lg:column-start-2 lg:col-start-1 lg:col-end-13 py-5 px-3 bg-blue-100 dark:bg-gray-800">
      <div className="grid lg:grid-cols-2">
        <div>
          <h4 className="font-bold">Assets</h4>
          <ul className="grid items-center text-blue-700 dark:text-blue-400">
            <li>
              <a href="/assets.7z">Assets</a>
            </li>
            <li>
              <Link href="license">license</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Site</h4>
          <ul className="grid items-center text-blue-700 dark:text-blue-400">
            <li>
              <a href="language">language</a>
            </li>
            <li>
              <a href="developer">developer</a>
            </li>
            <li>
              <a href="sitemap">SiteMap</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Nauzome</h4>
          <ul className="grid items-center text-blue-700 dark:text-blue-400">
            <li>
              <a href="donation">donation</a>
            </li>
            <li>
              <a href="work">work</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Social</h4>
          <ul className="grid items-center text-blue-700 dark:text-blue-400">
            <li>
              <a href="https://misskey.pm/@nz">misskey</a>
            </li>
            <li>
              <a href="https://pixelfed.moe/nz">pixelfed</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>2021-2023</p>
      </div>
    </header>
  );
}
