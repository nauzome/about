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
            <div className="absolute inset-0 w-full h-full bg-white opacity-50 nz_design_mask"></div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">
                developer
              </h2>
            </div>
          </div>
          <p>なうぞめはデザインの人だと思っています。</p>
          <div className="my-4">
            <h3 className="text-xl">ルール</h3>
            <ul className="list-disc list-inside">
              <li>border-radius はとても利用しない。</li>
              <li>色に色を重ねる場合は4カラー以上離す。</li>
              <li>黒、白などはあまり利用しない。</li>
              <li>色、フォント、スタイルは多用しない。</li>
              <li>携帯電話にも対応させる場合は同じページでデザインする。</li>
              <li>pcなどのclass名は利用しない。</li>
              <li>平行ではない余白などは利用しない。</li>
            </ul>
          </div>
          <div className="my-4">
            <h3 className="text-xl">サイズ</h3>
            <p>webpakeでも何でも良いのでビルドして小さくしましょう。</p>
            <p>
              なお、ファイル数が多くなったら自動化するスクリプトを作成することもお忘れなく。
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl">制限</h3>
            <p>
              画像をダウンロードされたくないからと言ってImgタグなどを触れなくする必要はありません。
            </p>
            <p>出来るだけImgタグを利用してそのままの状態で提供してください。</p>
            <p>ユーザーは自由にサイトを利用できます。素晴らしい事です。</p>
            <p>
              ユーザーに制限を加えるべきではありませんし規制しても簡単に回避できます。
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl">レガシー対応</h3>
            <p>
              する必要はありませんが現在のWebに概ね対応しているブラウザには対応させる必要があります。
            </p>
            <p>
              なお、videoタグやGrid、Mask属性に対応していない物は無視することを推奨します。
            </p>
            <p>
              ただ、サポートしないだけであって非推奨で閲覧は許可されるべきです。無理やり転送したりしないようにしましょう。
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl">携帯電話などの対応</h3>
            <p>
              携帯電話などにはこのように出来るだけ1アクションで接続できるようにしてください。
            </p>
            <p>
              よく、ハンバーガーメニューなどを利用しますがそれはユーザーにとって非効率だと考えています。
            </p>
            <p>また、はみ出す場合は気にせず改行してください。</p>
            <Image
              src="/532c28d5412dd75bf975fb951c740a30.webp"
              width="1000"
              height="1000"
              alt=""
              className="w-full max-w-5xl my-3 mx-auto"
            />
          </div>
          <div className="my-4">
            <h3 className="text-xl">ダークモードの実装</h3>
            <p>
              ダークモードに対応する際はできるだけ暗く見やすい事に重きをおく。800グレーなどを利用すること。
            </p>
            <Image
              src="/3796fbfbf604f9b9b6b44894a577d9d6.webp"
              width="1000"
              height="1000"
              alt=""
              className="w-full max-w-5xl my-3 mx-auto"
            />
          </div>
          <div className="my-4">
            <h3 className="text-xl">色使い</h3>
            <div className="grid gap-4 my-4">
              <div>
                <h4 className="text-xl">基本な色</h4>
                <ul className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-white"></span>
                    <span className="absolute text-black">white</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-black"></span>
                    <span className="absolute text-white">black</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-maxblue"></span>
                    <span className="absolute text-white">maxblue</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl">青</h4>

                <ul className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-100"></span>
                    <span className="absolute text-white">blue-100</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-200"></span>
                    <span className="absolute text-white">blue-200</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-300"></span>
                    <span className="absolute text-white">blue-300</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-400"></span>
                    <span className="absolute text-white">blue-400</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-500"></span>
                    <span className="absolute text-white">blue-500</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-600"></span>
                    <span className="absolute text-white">blue-600</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-700"></span>
                    <span className="absolute text-white">blue-700</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-blue-800"></span>
                    <span className="absolute text-white">blue-800</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl">鉛筆色</h4>
                <ul className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-100"></span>
                    <span className="absolute text-white">zinc-100</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-200"></span>
                    <span className="absolute text-white">zinc-200</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-300"></span>
                    <span className="absolute text-white">zinc-300</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-400"></span>
                    <span className="absolute text-white">zinc-400</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-500"></span>
                    <span className="absolute text-white">zinc-500</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-600"></span>
                    <span className="absolute text-white">zinc-600</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-700"></span>
                    <span className="absolute text-white">zinc-700</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-zinc-800"></span>
                    <span className="absolute text-white">zinc-800</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl">灰色</h4>
                <ul className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-100"></span>
                    <span className="absolute text-white">gray-100</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-200"></span>
                    <span className="absolute text-white">gray-200</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-300"></span>
                    <span className="absolute text-white">gray-300</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-400"></span>
                    <span className="absolute text-white">gray-400</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-500"></span>
                    <span className="absolute text-white">gray-500</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-600"></span>
                    <span className="absolute text-white">gray-600</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-700"></span>
                    <span className="absolute text-white">gray-700</span>
                  </li>
                  <li className="relative grid justify-items-center items-center">
                    <span className="inline-block w-full h-16 bg-gray-800"></span>
                    <span className="absolute text-white">gray-800</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
