import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="z-10 relative grid max-w-6xl w-full mx-auto">
        <Nav />
        <div className="my-3">
          <div className="relative w-full aspect-video my-4 bg-maxblue overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/d692bc40d83423d24d3a37582f58468c.webp"
                width="1500"
                height="1500"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">License</h2>
            </div>
          </div>
          <h3 className="text-xl">GoodBoyResistance</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://t.me/addstickers/GoodBoyResistance"
              >
                https://t.me/addstickers/GoodBoyResistance
              </a>
            </li>
          </ul>
          <h3 className="text-xl">ityped</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://github.com/luisvinicius167/ityped"
              >
                https://github.com/luisvinicius167/ityped
              </a>
            </li>
          </ul>
          <h3 className="text-xl">otadesign rounded font</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://jypg.net/works/1464"
              >
                https://jypg.net/works/1464
              </a>
            </li>
          </ul>
          <h3 className="text-xl">tw</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://tw.twitter.com/"
              >
                https://tw.twitter.com/
              </a>
            </li>
          </ul>
          <h3 className="text-xl">icons bootstrap</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://icons.getbootstrap.com/"
              >
                https://icons.getbootstrap.com/
              </a>
            </li>
          </ul>
          <h3 className="text-xl">lineseed</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://seed.line.me/index_jp.html"
              >
                https://seed.line.me/index_jp.html
              </a>
            </li>
          </ul>
          <h3 className="text-xl">getpublii</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://getpublii.com/"
              >
                https://getpublii.com/
              </a>
            </li>
          </ul>
          <h3 className="text-xl">Clker-Free-Vector-Images</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://pixabay.com/ja/vectors/23439/"
              >
                https://pixabay.com/ja/vectors/23439/
              </a>
            </li>
          </ul>
          <h3 className="text-xl">destyle.css</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://nicolas-cusan.github.io/destyle.css/"
              >
                https://nicolas-cusan.github.io/destyle.css/
              </a>
            </li>
          </ul>
          <h3 className="text-xl">misskey-dev/assets</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://github.com/misskey-dev/assets/"
              >
                https://github.com/misskey-dev/assets/
              </a>
            </li>
          </ul>
          <h3 className="text-xl">サンタの帽子</h3>
          <ul>
            <li>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://pixabay.com/ja/vectors/%e3%82%b5%e3%83%b3%e3%82%bf%e3%81%ae%e5%b8%bd%e5%ad%90-%e3%82%af%e3%83%aa%e3%82%b9%e3%83%9e%e3%82%b9-7622212/"
              >
                https://pixabay.com/ja/vectors/サンタの帽子-クリスマス-7622212/
              </a>
            </li>
          </ul>
        </div>
        <Bar />
      </div>
    </>
  );
}
