import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="lg:col-start-3 lg:col-end-13">
        <div className="py-3 lg:py-10">
          <div className="grid gap-5 lg:py-5 lg:px-4 lg:rounded lg:border-2 lg:border-slate-300 lg:border-solid w-full ">
            <h2 className="text-3xl">Project</h2>
            <div>
              <h3 className="text-xl">aipictors</h3>
              <p>aipictorsのサイトの開発メンバーです。</p>
              <p>
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://www.aipictors.com/user/?id=nz"
                >
                  プロフィール
                </a>
                、
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://www.github.com/nauzome"
                >
                  github
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl">Torノードについて。</h3>

              <p>
                詳しくは{" "}
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://tornode.nauzome.org/"
                >
                  tornode.nauzome.org
                </a>{" "}
                を参考にしてほしいですが軽く書きます。
              </p>
              <p>
                ram:1GBのサーバーで一般ノードを2022年1月2日ぐらいから運営しています。
              </p>
            </div>
            <div>
              <h3 className="text-xl">検閲回避ミラーについて。</h3>
              <h4>メインアドレス</h4>
              <ul>
                <li>
                  <a
                    className="text-blue-700 dark:text-blue-400"
                    href="https://mirror.nauzome.org/"
                  >
                    mirror.nauzome.org
                  </a>
                </li>
              </ul>
              <h4>サブアドレス</h4>
              <ul>
                <li>
                  <a
                    className="text-blue-700 dark:text-blue-400"
                    href="https://piwxucfuoi.nauzome.org/"
                  >
                    piwxucfuoi.nauzome.org
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-700 dark:text-blue-400"
                    href="https://tk2k9si3j1.nauzome.org/"
                  >
                    tk2k9si3j1.nauzome.org
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>ブロックされた場合はサブアドレスをご利用ください。</p>
              <p>またバックドア、ウイルスはありません。</p>
            </div>
            <div>
              <h3 className="text-xl">家出少女/少年プロジェクト(廃止)</h3>
              <p>
                今思えばランダムにリプライを送信するアカウントは自分の正義に燃えていた、これは批判されたとおりスパムだと思う、ただページをインスタンスの管理者がリンクすることは良い方法だと思う。
              </p>
              <p>
                <s>
                  私はネカマを趣味としていました、それは人を騙すことでありもう足を洗いました。
                </s>
              </p>
              <p>
                <s>
                  ただその時に避妊具なしで性行為を行おうとするアカウントが多数見つけられました。
                </s>
              </p>
              <p>
                <s>これは深刻な問題だと考えました。</s>
              </p>
              <p>
                <s>
                  ほとんどがネカマであるのは確かかもしれないですただ1割いたら1割のために動きたいと考えました。
                </s>
              </p>
              <p>
                詳細:
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://runaway.nauzome.org/"
                >
                  runaway.nauzome.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
