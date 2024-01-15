import Link from "next/link";
export default function Nav() {
  return (
    <nav className="z-20 px-2 py-1 sticky top-0 border-b-solid border-b-1 border-b-slate-300 dark:border-b-white bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl">
      <ul className="flex gap-5 items-center justify-center lg:justify-normal max-w-5xl mx-auto py-6">
        <li><Link href="about">about</Link></li>
        <li><a href="//blog.nauzome.com/">blog</a></li>
        <li><Link href="faq">faq</Link></li>
        <li><Link href="project">Project</Link></li>
        <li><Link href="contact">contact</Link></li>
      </ul>
    </nav>
  );
}
