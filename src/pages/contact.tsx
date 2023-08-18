import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid gap-5 lg:py-5 lg:px-4 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid w-full">
        <h2 className="text-3xl">連絡先</h2>
        <div className="grid gap-2 lg:grid-cols-4 sm:grid-cols-2 text-white">
          <div className="p-4 bg-red-400 dark:bg-gray-800 text-center rounded">
            <a href="mailto:nauzome@nauzome.com">
              <div className="grid gap-2">
                <span className="text-4xl">
                  <i className="bi bi-inbox"></i>
                </span>
                <span>nauzome@nauzome.com</span>
              </div>
            </a>
          </div>
          <div className="p-4 bg-red-400 dark:bg-gray-800 text-center rounded">
              <div className="grid gap-2">
                <span className="text-4xl">
                  <i className="bi bi-signal"></i>
                </span>
                <span>+81 7084122063</span>
              </div>
          </div>
          
          <div className="p-4 bg-red-400 dark:bg-gray-800 text-center rounded">
            <a href="https://t.me/nauzome">
              <div className="grid gap-2">
                <span className="text-4xl">
                  <i className="bi bi-telegram"></i>
                </span>
                <span>@nauzome</span>
              </div>
            </a>
          </div>
          <div className="p-4 bg-red-400 dark:bg-gray-800 text-center rounded">
            <a href="tel:+817084122063">
              <div className="grid gap-2">
                <span className="text-4xl">
                  <i className="bi bi-telephone"></i>
                </span>
                <span>+81 7084122063</span>
              </div>
            </a>
          </div>
          <div className="p-4 bg-red-400 dark:bg-gray-800 text-center rounded">
            <a href="https://www.youtube.com/@nauzome">
              <div className="grid gap-2">
                <span className="text-4xl">
                  <i className="bi bi-youtube"></i>
                </span>
                <span>@nauzome</span>
              </div>
            </a>
          </div>
          <div className="p-4 bg-red-400 dark:bg-gray-800 text-center rounded">
            <a href="/certification/meta.json">
              <div className="grid gap-2">
                <span className="text-4xl">
                  <i className="bi bi-three-dots"></i>
                </span>
                <span>More!</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
