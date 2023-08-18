import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="grid gap-5 lg:py-5 lg:px-4 lg:border-2 border-slate-300 dark:border-slate-500 lg:border-solid rounded w-full">
        <h2 className="text-3xl">Project</h2>
        <div>
          <h3 className="text-xl">
            <a
              href="https://pixelfed.moe/"
              className="text-blue-700 dark:text-blue-400"
            >
              pixelfed.moe
            </a>
          </h3>
          <p>
            pixelfed.moeというpixelfedを利用したpixelfedインスタンスを運営しています。
          </p>
          <p>これはInstagramを超えはずです。</p>
          <p>ちなみになうぞめはpixelfed愛しています。</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a
              href="https://www.aipictors.com/"
              className="text-blue-700 dark:text-blue-400"
            >
              aipictors
            </a>
          </h3>
          <p>aipictorsのサイトの開発メンバーです。</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a
              href="https://tornode.nauzome.org/"
              className="text-blue-700 dark:text-blue-400"
            >
              Torノード
            </a>
          </h3>
          <p>
            ram:1GBのサーバーで一般ノードを2022年1月2日ぐらいから運営しています。
          </p>
        </div>
        <div>
          <h3 className="text-xl">
            <a
              href="https://mirror.nauzome.org/"
              className="text-blue-700 dark:text-blue-400"
            >
              ミラー
            </a>
          </h3>
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
          <p>ブロックされた場合はサブアドレスをご利用ください。</p>
          <p>またバックドア、ウイルスはありません。</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a
              href="https://runaway.nauzome.org/"
              className="text-blue-700 dark:text-blue-400"
            >
              家出少女/少年プロジェクト
            </a>
          </h3>
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
        </div>
      </div>
    </>
  );
}
