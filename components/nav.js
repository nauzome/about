import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="lg:col-start-1 lg:col-end-3 lg:column-start-1">
      <div className="flex sticky inset-0 w-full h-full max-h-screen">
        <div className="relative grid gap-3 w-full h-max">
          <div className="grid gap-3 py-3 lg:py-10 text-white">
            <div className="lg:block hidden p-2 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid rounded">
              <a href="/about">
                <img src="/i.svg" alt="" className="w-full" />
              </a>
            </div>
            <ul className="lg:grid md:flex grid gap-3 w-full justify-self-center">
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <Link href="about">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-search"></i>
                    <span>about</span>
                  </div>
                </Link>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <a href="https://blog.nauzome.com">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-at"></i>
                    <span>blog</span>
                  </div>
                </a>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <Link href="faq">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-question-circle"></i>
                    <span>faq</span>
                  </div>
                </Link>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <Link href="ethics">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-file-medical"></i>
                    <span>ethics</span>
                  </div>
                </Link>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <Link href="project">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-life-preserver"></i>
                    <span>Project</span>
                  </div>
                </Link>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <a href="contact">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-person-lines-fill"></i>
                    <span>contact</span>
                  </div>
                </a>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <a href="/work">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-emoji-kiss"></i> <span>work</span>
                  </div>
                </a>
              </li>
              <li className="p-2 bg-red-400 dark:bg-gray-800 rounded">
                <Link href="history">
                  <div className="flex justify-self-center gap-2">
                    <i class="bi bi-clock-history"></i>
                    <span>history</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
