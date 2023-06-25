import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="my-2 bg-blue-100 dark:bg-gray-800">
      <div className="py-3 px-2">
        <a href="about" className="inline-block">
          <h1>
            <Image
              src="/014fc8895cdc3124ba35f20de37d6872.webp"
              width="500"
              height="500"
              alt=""
              className="w-32"
            />
          </h1>
        </a>
        <ul className="lg:flex items-center text-blue-700 dark:text-blue-400 py-1">
          <li className="p-3">
            <Link href="about">about</Link>
          </li>
          <li className="p-3">
            <a href="https://blog.nauzome.com/">Blog</a>
          </li>
          <li className="p-3">
            <Link href="faq">faq</Link>
          </li>
          <li className="p-3">
            <Link href="avatar">avatar</Link>
          </li>
          <li className="p-3">
            <Link href="donation">Donation</Link>
          </li>
          <li className="p-3">
            <Link href="project">project</Link>
          </li>
          <li className="p-3">
            <Link href="ethics">ethics</Link>
          </li>
          <li className="p-3">
            <Link href="history">history</Link>
          </li>
          <li className="p-3">
            <Link href="license">license</Link>
          </li>
          <li className="p-3 lg:ml-auto">
            <a href="language">language</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
