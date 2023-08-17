import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="lg:col-start-3 lg:col-end-13">
        <div className="py-3 lg:py-10">
          <div className="grid gap-5 lg:py-5 lg:px-4 lg:rounded lg:border-2 lg:border-slate-300 lg:border-solid w-full ">
            <h2 className="text-3xl">なうぞめの歴史</h2>

            <div className="grid gap-2 lg:grid-cols-2">
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2006-XX-XX</div>
                <div>
                  <h1 className="text-xl">生まれる</h1>
                  <p>雨の日だったらしい</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2008-XX-XX</div>
                <div>
                  <h1 className="text-xl">掃除機に興味を持つ</h1>
                  <p>コードで遊ぶのが楽しかったらしい。</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2018-XX-XX</div>
                <div>
                  <h1 className="text-xl">Torを知る</h1>
                  <p>英語が読めなくて断念する。</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2020-XX-XX</div>
                <div>
                  <h1 className="text-xl">Tor上に書き込みを開始しする</h1>
                  <p>炎上はまだしていない。</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2020-XX-XX</div>
                <div>
                  <h1 className="text-xl">
                    Torでmisskeyインスタンスを発見する
                  </h1>
                  <p>まだ、分散型SNSを理解していない。</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2020-12-XX</div>
                <div>
                  <h1 className="text-xl">Tor経由のTwitterを開設</h1>
                  <p>その頃はvpnuserだった。</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2022-01-XX</div>
                <div>
                  <h1 className="text-xl">Torノードを動かす</h1>
                  <p>のち、閉鎖のち再開する。</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
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
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2022-XX-XX</div>
                <div>
                  <h1 className="text-xl">cover.pmを開設</h1>
                  <p>のち、閉鎖(2022-12-31ぐらい。)</p>
                </div>
              </div>
              <div className="p-4 bg-blue-100 dark:border-slate-500 rounded">
                <div className="my-2 text-2xl">2022-12-21</div>
                <div>
                  <h1 className="text-xl">Torの翻訳を開始</h1>
                  <p>最近はペースが落ちている。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
