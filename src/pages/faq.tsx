import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
      <div className="nz_contents">
        <div className="grid gap-4">
          <h2 className="text-3xl">よくあると思う質問</h2>
          <p>
            なんか質問が無いので自分で質問します。なんか動画投稿者がやっていました。
          </p>
          <div className="py-3 px-4 bg-blue-100 dark:text-white dark:bg-gray-800 rounded">
            <ul className="list-decimal list-inside text-blue-700">
              <li>
                <a href="#%E9%80%A3%E7%B5%A1%E5%85%88">連絡先</a>
              </li>
              <li>
                <a href="#%E3%81%AA%E3%81%86%E3%81%9E%E3%82%81%E7%94%B1%E6%9D%A5%E3%81%AF%EF%BC%9F">
                  なうぞめ由来は？
                </a>
              </li>
              <li>
                <a href="#%E5%8C%BF%E5%90%8D%E3%81%A8%E3%81%AF%EF%BC%9F">
                  匿名とは？
                </a>
              </li>
              <li>
                <a href="#%E4%BD%95%E8%80%85%EF%BC%9F">何者？</a>
              </li>
              <li>
                <a href="#GAFA%E3%81%A7%E4%BF%A1%E9%A0%BC%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%AE%E3%81%AF%EF%BC%9F">
                  GAFAで信頼できるのは？
                </a>
              </li>
              <li>
                <a href="#%E6%90%BA%E5%B8%AF%E9%9B%BB%E8%A9%B1%E3%81%AF%E4%BD%95%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F">
                  携帯電話は何を利用していますか？
                </a>
              </li>
              <li>
                <a href="#%E5%AE%89%E5%85%A8%E3%81%AA%E3%83%A1%E3%83%83%E3%82%BB%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E3%81%AF%EF%BC%9F">
                  安全なメッセンジャーは？
                </a>
              </li>
              <li>
                <a href="#%E7%8C%AB%E6%B4%BE%E7%8A%AC%E6%B4%BE">猫派犬派</a>
              </li>
              <li>
                <a href="#%E5%A5%BD%E3%81%8D%E3%81%AA%E9%85%8D%E4%BF%A1%E8%80%85%E3%80%81%E5%8B%95%E7%94%BB%E6%8A%95%E7%A8%BF%E8%80%85%E3%81%AF%EF%BC%9F">
                  好きな配信者、動画投稿者は？
                </a>
              </li>
              <li>
                <a href="#%E5%A5%BD%E3%81%8D%E3%81%AA%E3%82%B9%E3%83%BC%E3%83%97%E3%81%AF%EF%BC%9F">
                  好きなスープは？
                </a>
              </li>
              <li>
                <a href="#%E8%B3%87%E6%A0%BC%E3%81%AF%EF%BC%9F">資格は？</a>
              </li>
              <li>
                <a href="#%E4%B8%80%E7%B7%92%E3%81%AB%E3%81%84%E3%81%A6%E6%A5%BD%E3%81%97%E3%81%84%E4%BA%BA%E3%81%AF">
                  一緒にいて楽しい人は
                </a>
              </li>
              <li>
                <a href="#%E6%9C%80%E8%BF%91%E3%81%82%E3%81%A3%E3%81%9F%E5%AC%89%E3%81%97%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8%E3%81%AF">
                  最近あった嬉しかったことは
                </a>
              </li>
              <li>
                <a href="#%E5%A5%BD%E3%81%8D%E3%81%AA%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2">
                  好きなソフトウェア
                </a>
              </li>
              <li>
                <a href="#%E6%8A%80%E8%A1%93%E8%80%85%E3%81%A7%E3%81%99%E3%81%8B">
                  技術者ですか
                </a>
              </li>
              <li>
                <a href="#%E5%A5%BD%E3%81%8D%E3%81%AA%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E3%81%AF%EF%BC%9F">
                  好きなライセンスは？
                </a>
              </li>
              <li>
                <a href="#%E5%A5%BD%E3%81%8D%E3%81%AA%E3%81%93%E3%81%A8">
                  好きなこと
                </a>
              </li>
              <li>
                <a href="#%E5%AB%8C%E3%81%84%E3%81%AA%E3%81%93%E3%81%A8">
                  嫌いなこと
                </a>
              </li>
              <li>
                <a href="#%E6%AC%B2%E3%81%97%E3%81%84%E3%82%82%E3%81%AE">
                  欲しいもの
                </a>
              </li>
              <li>
                <a href="#%E4%BB%8A%E8%81%B4%E3%81%84%E3%81%A6%E3%81%84%E3%82%8B%E6%9B%B2%E3%81%AF%EF%BC%9F">
                  今聴いている曲は？
                </a>
              </li>
            </ul>
          </div>
          <div id="連絡先">
            <h3 className="text-xl">連絡先</h3>
            <p>
              <a
                href="/certification/meta.json"
                className="text-blue-700 dark:text-blue-400"
              >
                meta.json
              </a>
              を参考にしてください。
            </p>
          </div>
          <div id="なうぞめ由来は？">
            <h3 className="text-xl">なうぞめ由来は？</h3>
            <p>なんか最初の頃は覚えていましたが 忘れてしまいました。</p>
          </div>
          <div id="匿名とは？">
            <h3 className="text-xl">匿名とは？</h3>
            <p>
              レベルがあると思う。私は主にIPアドレスまで隠した状態を明記していない場合は匿名としています。
            </p>
          </div>
          <div id="何者？">
            <h3 className="text-xl">何者？</h3>
            <p>インターネットの住人</p>
          </div>
          <div id="GAFAで信頼できるのは？">
            <h3 className="text-xl">GAFAで信頼できるのは？</h3>
            <p>
              MicrosoftはGAFAではかなりまともだと思う。というかGAFAの企業のOSSなどの貢献には非常に感謝する必要があります。
            </p>
          </div>
          <div id="携帯電話は何を利用していますか？">
            <h3 className="text-xl">携帯電話は何を利用していますか？</h3>
            <p>
              Google
              pixelです、カスタムromを入れることが比較的簡単にできるからです。
            </p>
          </div>
          <div id="安全なメッセンジャーは？">
            <h3 className="text-xl">安全なメッセンジャーは？</h3>
            <p>
              多分、インスタントなメッセンジャー(携帯電話ベース。)だと思って回答しますがSignalです、ただ、見方によってはTelegramだと思うです。
            </p>
            <p>
              ただ、インスタントなメッセンジャーは携帯電話を必須とするケースが多く。また、携帯電話は端末の暗号化をサポートしていなかったりリスクがある場合があります。
            </p>
            <p>なのでPCベースのXMPPなどを利用するべきです。</p>
          </div>
          <div id="猫派犬派">
            <h3 className="text-xl">猫派犬派</h3>
            <p>可愛いよねぇー(回答になっていない。)。</p>
          </div>
          <div id="好きな配信者、動画投稿者は？">
            <h3 className="text-xl">好きな配信者、動画投稿者は？</h3>
            <ul className="list-disc list-inside">
              <li>もこう</li>
              <p>
                マイペースというかなんか空気があり、また視聴者部屋紹介動画が好き。
              </p>
              <li>キモノちゃん</li>
              <p>ネカマ配信が好き。</p>
              <li>ラムダ技術部</li>
              <p>淡々としていて無限の語彙力がある。</p>
              <li>トーマスガジェマガ</li>
              <p>なんか帰省動画の依存性がある。</p>
            </ul>
          </div>
          <div id="好きなスープは？">
            <h3 className="text-xl">好きなスープは？</h3>
            <p>コーンスープです。</p>
          </div>
          <div id="資格は？">
            <h3 className="text-xl">資格は？</h3>
            <p>無い。</p>
          </div>
          <div id="一緒にいて楽しい人は">
            <h3 className="text-xl">一緒にいて楽しい人は</h3>
            <p>食べ物を美味しいという人。</p>
          </div>
          <div id="最近あった嬉しかったことは">
            <h3 className="text-xl">最近あった嬉しかったことは</h3>
            <p>髪の毛の色を褒められた。</p>
          </div>
          <div id="好きなソフトウェア">
            <h3 className="text-xl">好きなソフトウェア</h3>
            <ul className="list-disc list-inside">
              <li>GIMP</li>
              <li>misskey,calckey</li>
              <li>Debain</li>
              <li>Tor</li>
              <li>Firefox</li>
              <li>VScode</li>
            </ul>
          </div>
          <div id="技術者ですか">
            <h3 className="text-xl">技術者ですか</h3>
            <p>はい。</p>
          </div>
          <div id="好きなライセンスは？">
            <h3 className="text-xl">好きなライセンスは？</h3>
            <ul className="list-disc list-inside">
              <li>MIT</li>
              <li>CC0</li>
            </ul>
          </div>
          <div id="好きなこと">
            <h3 className="text-xl">好きなこと</h3>
            <ul className="list-disc list-inside">
              <li>面白い物件を探す</li>
              <li>なんか産業用のドローンとかサーバーとかGPUを見る</li>
              <li>デザインについて考える</li>
              <li>音楽を大音量で聴く</li>
              <li>インターネットをする</li>
              <li>食べる</li>
              <li>寝る</li>
            </ul>
          </div>
          <div id="嫌いなこと">
            <h3 className="text-xl">嫌いなこと</h3>
            <ul className="list-disc list-inside">
              <li>ニュースを見る</li>
              <li>暑い状態</li>
              <li>お風呂に入ってから用事に気付き出る時</li>
            </ul>
          </div>
          <div id="欲しいもの">
            <h3 className="text-xl">欲しいもの</h3>
            <p>語彙力、読解力？</p>
          </div>
          <div id="今聴いている曲は？">
            <h3 className="text-xl">今聴いている曲は？</h3>
            <p>
              <a
                href="https://open.spotify.com/track/1seTU76X5ONLUcb85t8zcI"
                className="text-blue-700 dark:text-blue-400"
              >
                live生live
              </a>
              です。
            </p>
          </div>
        </div>
      </div>
      <Bar />
    </>
  );
}
