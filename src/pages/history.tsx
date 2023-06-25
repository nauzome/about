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
                src="/0812f14f43315611dd0ef462515c9d00.webp"
                width="1500"
                height="1500"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">History</h2>
            </div>
          </div>
          <div className="grid gap-2 lg:grid-cols-2">
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2006-XX-XX</div>
              <div>
                <h1 className="text-xl">生まれる</h1>
                <p>雨の日だったらしい</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2008-XX-XX</div>
              <div>
                <h1 className="text-xl">掃除機に興味を持つ</h1>
                <p>コードで遊ぶのが楽しかったらしい。</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2018-XX-XX</div>
              <div>
                <h1 className="text-xl">Torを知る</h1>
                <p>英語が読めなくて断念する。</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2020-XX-XX</div>
              <div>
                <h1 className="text-xl">Tor上に書き込みを開始しする</h1>
                <p>炎上はまだしていない。</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2020-XX-XX</div>
              <div>
                <h1 className="text-xl">Torでmisskeyインスタンスを発見する</h1>
                <p>まだ、分散型SNSを理解していない。</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2020-12-XX</div>
              <div>
                <h1 className="text-xl">Tor経由のTwitterを開設</h1>
                <p>その頃はvpnuserだった。</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2022-01-XX</div>
              <div>
                <h1 className="text-xl">Torノードを動かす</h1>
                <p>のち、閉鎖のち再開する。</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2022-XX-XX</div>
              <div>
                <h1 className="text-xl">炎上する</h1>
                <p>
                  児童ポルノを放置した掲示板に警告を送り炎上する。
                  <br />
                  今でも一部は正しいと思っている。
                </p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2022-XX-XX</div>
              <div>
                <h1 className="text-xl">cover.pmを開設</h1>
                <p>のち、閉鎖(2022-12-31ぐらい。)</p>
              </div>
            </div>
            <div className="p-4 bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="my-2 text-2xl">2022-12-21</div>
              <div>
                <h1 className="text-xl">Torの翻訳を開始</h1>
                <p>最近はペースが落ちている。</p>
              </div>
            </div>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
