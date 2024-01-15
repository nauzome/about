import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslation from 'next-translate/useTranslation';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, lang } = useTranslation('common')
  return (
    <>
      <div className="grid gap-4 w-full">
        <img src="/media/animation_compass.webp" alt="animation_compass.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:faq_title')}</h2>
        <div className="flex items-center gap-2 p-2 border-solid border-1 border-slate-300 dark:border-white rounded">
          <span className="text-2xl">
            <span className="bi bi-exclamation-triangle-fill"></span>
          </span>
          <p>FAQ is not translated. We apologize for the inconvenience.</p>
        </div>
        <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
          <ul className="list-decimal list-inside">
            <p className="text-lg">私について</p>
            <li><a href="#wha-tare-you-doing">貴方は何をしていますか</a></li>
            <li><a href="#origin">由来</a></li>
            <li><a href="#since-when-have-you-been-using-your-name">いつから名乗っていますか</a></li>
            <li><a href="#how-old">何歳ですか</a></li>
            <li><a href="#contact">連絡先</a></li>
            <li><a href="#icon-cute">アイコンかわいい</a></li>
            <p className="text-lg">私の考え</p>
            <li><a href="#what-i-like-is">好きな事/物</a></li>
            <li><a href="#what-i-dont-like">嫌いな事/物</a></li>
            <li><a href="#the-person-you-respect">尊敬する人は</a></li>
            <li><a href="#useful-program">便利なプログラム</a></li>
            <li><a href="#the-future-of-the-dream">将来の夢は</a></li>
            <li><a href="#whats-your-favorite-song">好きな曲は</a></li>
            <p className="text-lg">思想</p>
            <li><a href="#internet-election">インターネット選挙</a></li>
            <li><a href="#internet-archive">インターネットアーカイブは著作権の対象外です</a></li>
            <li><a href="#service-responsibility">サービスの責任</a></li>
            <li><a href="#safe-attack">安全な場所から攻撃する人間はクソ野郎だと思っています</a></li>
            <p className="text-lg">食べ物について</p>
            <li><a href="#what-is-your-favorite-food">好きな食べ物は</a></li>
            <li><a href="#delicious-food-shop">美味しい食べ物屋さん</a></li>
            <li><a href="#i-can-cook">料理できる品</a></li>
            <p className="text-lg">Torリレーについて</p>
            <li><a href="#do-you-have-any-plans-to-operate-tors-buricchi">Torのブリッチリレーは運営予定ありますか</a></li>
            <li><a href="#reasons-for-quitting-tor-relay-in-2022">2022年にTorリレーを辞めた理由</a></li>
            <p className="text-lg">サイトについて</p>
            <li><a href="#old-site">古いサイトをみたい</a></li>
            <li><a href="#link">リンクは自由ですか</a></li>
            <li><a href="#copyright">著作権</a></li>
            <p className="text-lg">その他</p>
            <li><a href="#wikipedia-articles-worth-reading">読む価値のあるWikipediaの記事</a></li>
          </ul>
        </div>
        <div id="wha-tare-you-doing">
          <h3 className="text-xl">貴方は何をしていますか</h3>
          <p>私はインターネットユーザーであり日々どうでもいい書き込みを繰り返します。</p>
          <p>また、私が誇る事はTorリレーを運営している事です。</p>
          <p>詳細は<a href="https://nauzome.org/" className="underline">nauzome.org</a>をみてください。</p>
        </div>
        <div id="origin">
          <h3 className="text-xl">由来</h3>
          <p>名前の由来は覚えていません。ただドメインを取得できたからかもしれません。</p>
        </div>
        <div id="since-when-have-you-been-using-your-name">
          <h3 className="text-xl">いつから名乗っていますか</h3>
          <p>現存する物として2020年12月からTwitterがあります。当時はvpnuserを名乗っていました。</p>
          <p>少ししたら名前をなうぞめにした気がします。つまりはなうぞめは3歳ぐらいです。</p>
        </div>
        <div id="how-old">
          <h3 className="text-xl">何歳にですか</h3>
          <p>17歳です。2024年の8月に18歳になります。</p>
          <p>携帯電話を契約できる事に興奮を隠せません。</p>
        </div>
        <div id="contact">
          <h3 className="text-xl">連絡先</h3>
          <p><a href="contact" className="underline">contact</a>にある連絡先は自由に追加してください。</p>
          <p>なうぞめは友達を募集しています。</p>
        </div>
        <div id="icon-cute">
          <h3 className="text-xl">アイコンかわいい</h3>
          <p><a href="https://nca10.net/" className="underline">nca10.net</a>によって作成してもらいました。</p>
          <p>素敵でしょ！。</p>
        </div>
        <div id="what-i-like-is">
          <h3 className="text-xl">好きな事/物</h3>
          <ul className="list-disc list-inside">
            <li>アナリティクスを見る</li>
            <li>携帯電話やカメラで写真を撮影する</li>
            <li>景色の良い景色を見る</li>
            <li>インターネットを利用する</li>
          </ul>
        </div>
        <div id="what-i-dont-like">
          <h3 className="text-xl">嫌いな事/物</h3>
          <ul className="list-disc list-inside">
            <li>一部の著作権法</li>
            <li>DMCA</li>
            <li>金盾などを代表とするインターネット検閲</li>
            <li>IPブロックするサイト</li>
          </ul>
        </div>
        <div id="the-person-you-respect" className="grid gap-1">
          <h3 className="text-xl">尊敬する人は</h3>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%89%E3%83%AF%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%87%E3%83%B3" className="underline">エドワード・スノーデン</a></h4>
            <p>PRISMの内部告発は大きな功績だと私は捉えています。</p>
            <p>一部のメディアはエドワード・スノーデン容疑者と報道しますが私は強く尊敬します。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%83%B4%E3%82%A7%E3%83%AB%E3%83%BB%E3%83%89%E3%82%A5%E3%83%BC%E3%83%AD%E3%83%95" className="underline">パーヴェル・ドゥーロフ</a></h4>
            <p>Telegramはクロスプラットホームで素晴らしいメッセンジャーです。</p>
            <p>様々な地域の検閲に対抗してオンラインを維持する事に強く尊敬します。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E7%B4%80%E8%97%A4%E6%AD%A3%E6%A8%B9" className="underline">紀藤正樹弁護士</a></h4>
            <p>カルト宗教関連で色々知りました。</p>
            <p>tweetやブログを見るとかなり共感すると同時に長く活動されている事を尊敬します。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E7%99%BB%E5%A4%A7%E9%81%8A" className="underline">登大遊</a></h4>
            <p>VPN(プログラム)の作成と検閲回避サービスの運営者です。</p>
            <p>「けしからん」大好きです。またNTTのお話すき。</p>
          </div>
          <p>(敬称略)</p>
        </div>
        <div id="useful-program" className="grid gap-1">
          <h3 className="text-xl">便利なプログラム</h3>
          <div>
            <h4 className="text-lg"><a href="https://github.com/cathugger/mkp224o" className="underline">mkp224o</a></h4>
            <p>好きな.onionアドレスを生成できます。最近はコンピュターの性能が向上したことにより7文字もすぐに作成できるでしょう。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://pixelfed.org/" className="underline">Pixelfed</a></h4>
            <p>Instagramライクな分散型snsだ。</p>
            <p>因みになうぞめのアカウント<a href="https://pixelfed.moe/nz" className="underline">pixelfed.moe/nz</a>です。フォローしてね。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://telegram.org/" className="underline">Telegram</a></h4>
            <p>実はiOS/Android,Mac/Windows/LinuxでElectronを使わずにクライアントを提供しているのはTelegramと数社です。</p>
            <p>皆さん色々ありますがTelegram使いましょう。Telegramはクライアントに重きを置いたmessengerです。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://www.mediawiki.org/wiki/MediaWiki/" className="underline">MediaWiki</a></h4>
            <p>便利なWikiだです。拡張機能入れるの楽しいよね。因みにWikipediaの開発元が作成していてWikipediaで利用されています。</p>
            <p>なおWikipediaモバイルアプリでは自分の作成したWikiサイトにアクセスできないのでご注意ください。ざんねん。</p>
          </div>
        </div>
        <div id="the-future-of-the-dream" className="grid gap-1">
          <h3 className="text-xl">将来の夢は</h3>
          <div>
            <h4 className="text-lg">旅行する</h4>
            <p>国内/海外問わず旅行が好きです。旅行したいです。</p>
          </div>
          <div>
            <h4 className="text-lg">稼いでTorリレーを運営</h4>
            <p>私は生活費と必要なお金を除いたすべてのお金をTorリレーの運営に利用したいです。</p>
            <p>家の下の力持ちになる。</p>
          </div>
        </div>
        <div id="whats-your-favorite-song">
          <h3 className="text-xl">好きな曲は</h3>
          <ul className="list-disc list-inside">
            <li><a href="https://music.apple.com/jp/song/1675550834" className="underline">太陽キッス</a></li>
            <li><a href="https://music.apple.com/jp/song/1713420581" className="underline">無自覚アプリオリ</a></li>
            <li><a href="https://music.apple.com/jp/song/1712290404" className="underline">平行線の美学</a></li>
            <li><a href="https://music.apple.com/jp/song/1675422016" className="underline">another rampage</a></li>
          </ul>
        </div>
        <div id="internet-election">
          <h3 className="text-xl">インターネット選挙</h3>
          <p>私はインターネット選挙は反対します。</p>
          <p>投票率を上げるには良い方法ですがコンピュータの前に本人しか存在しないとは限らないからです。</p>
        </div>
        <div id="internet-archive">
          <h3 className="text-xl">インターネットアーカイブは著作権の対象外です</h3>
          <p>今のインターネットアーカイブのサービスは如何なる場合においても著作権の対象外です。</p>
          <p>古いサイトや削除されたページを閲覧するのに重宝する<a href="https://archive.org/" className="underline">Internet Archive</a>は裁判に発展していますがアーカイブなので問題ありません。</p>
          <p>古いサイトを閲覧したいという利用者が優先されるべきです。</p>
        </div>
        <div className="service-responsibility">
        <h3 className="text-xl">サービスの責任</h3>
        <p>サービスの運営者は違反物を発見した対応する義務が一部において発生しますが多くの場合は対象外です。</p>
        <p>またサービス提供者がE2EEなどの機能により何をサービスで交換されているか不明な場合は一切の責任を放棄できるものだと考えています。</p>
        </div>
        <div id="safe-attack">
          <h3 className="text-xl">安全な場所から攻撃する人間はクソ野郎だと思っています</h3>
          <p>ロシアとウクライナの件で「なんでロシア国民はデモをしないんだロシア国民にも責任がある」ってうんちなコメントがありましたが言論の自由が担保されている日本からロシア国民に命令するのは余りにも無責任です。</p>
          <p>またデモに参加したロシア国民は一部拘束されています。</p>
        </div>
        <div id="what-is-your-favorite-food" className="grid gap-1">
          <h3 className="text-xl">好きな食べ物は</h3>
          <div>
            <h4 className="text-lg">ラーメン</h4>
            <p>ラーメンはとても美味しい食べ物です。おすすめは以下です。</p>
            <ul className="list-disc list-inside">
              <li><a href="https://stores.kourakuen.co.jp/15466" className="underline">幸楽苑 味噌野菜たんめん</a></li>
              <li><a href="https://hidakaya.hiday.co.jp/hits/ja/menu/1/detail/1.html" className="underline">日高屋 中華そば</a></li>
              <li><a href="https://umai-kitakata.com/item-detail/498743" className="underline">来夢 チャーシューメン</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg">納豆/卵(若しくは両方)</h4>
            <p>一生それを食べるとしたらそれはとても良い選択肢です。</p>
            <p>また朝食には欠かせません。おいしい。</p>
          </div>
          <div>
            <h4 className="text-lg">ナスの天ぷら</h4>
            <p>揚げたのにヘルシーでまた美味しいです。</p>
          </div>
        </div>
        <div id="delicious-food-shop" className="gird gap-1">
          <h3 className="text-xl">美味しい食べ物屋さん</h3>
          <div>
            <h4 className="text-lg"><a href="https://maps.app.goo.gl/vYgCZ5qXavsR3Hxd7" className="underline">うめ八</a></h4>
            <p>美味しいです。ただ人気なのでお昼や休みどきは気を付ける必要があります。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://maps.app.goo.gl/imc1w2MmyzmU5LVc8" className="underline">キッチン スペース ガーデン</a></h4>
            <p>美味しいです。色々あります。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://maps.app.goo.gl/p4enU5eo9y8W8qFr8" className="underline">ボリューム</a></h4>
            <p>美味しいです。定食系が多いです。</p>
          </div>
        </div>
        <div id="i-can-cook" className="grid gap-1">
          <h3 className="text-xl">料理できる品</h3>
          <div>
            <h4 className="text-lg">生姜焼き</h4>
            <p>なうぞめは衣がついた美味しい生姜焼きを作る事ができます。</p>
          </div>
          <div>
            <h4 className="text-lg">味噌汁</h4>
            <p>私は私好みの味噌汁を作成できます。豆腐とわかめが好きです。</p>
          </div>
        </div>
        <div id="do-you-have-any-plans-to-operate-tors-buricchi">
          <h3 className="text-xl">Torのブリッチリレーは運営予定ありますか</h3>
          <p>気持ちあるけど知識がありません。</p>
        </div>
        <div id="reasons-for-quitting-tor-relay-in-2022">
          <h3 className="text-xl">2022年にTorリレーを辞めた理由</h3>
          <p>資金難により停止しました。</p>
          <p>現在は改善しました。</p>
        </div>
        <div id="old-site">
          <h3 className="text-xl">古いサイトをみたい</h3>
          <p><a href="https://archive.nazuome.com/" className="underline">archive.nazuome.com</a>をご覧ください。</p>
          <p>なお利用できないサイトのバージョンがある事と内容が古い事に注意してください。</p>
        </div>
        <div id="link">
          <h3 className="text-xl">リンクは自由ですか</h3>
          <p>創価学会公式サイトと違いなうぞめの誹謗中傷や信用を毀損する内容を含むサイトからのリンクも許可します。</p>
          <p>というかするなって言ったてするだろうし法的に問題ないんだから強制力もない。</p>
          <p>リンクは自由です。素晴らしいね。</p>
          <p><a href="https://www.sokagakkai.jp/terms.html" className="underline">https://www.sokagakkai.jp/terms.html</a></p>
        </div>
        <div id="copyright">
          <h3 className="text-xl">著作権について</h3>
          <p>私は著作権が全版的に嫌いなので著作権を放棄できるところは放棄します。</p>
          <p>ただサイト自体が複数のフレームワークや画像などに依存しておりそれを除いた物をCC0とします。</p>
          <p>なお利用しているフレームワークや画像について<a href="license" className="underline">license</a>をご参照ください。</p>
        </div>
        <div id="wikipedia-articles-worth-reading" className="grid gap-1">
          <h3 className="text-xl">読む価値のあるWikipediaの記事</h3>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%82%A6%E3%83%A0%E7%9C%9F%E7%90%86%E6%95%99" className="underline">オウム真理教</a></h4>
            <p>この記事でパソコン会社などを運営している事を知った。</p>
            <p>とても長い記事だが内容がわかりやすく丁寧に描かれているので直ぐに読める。</p>
            <p>また編集履歴を確認すると2024年1月4日(2024年1月13日)にも編集されおり記事が多くの人々によって今も修正されている事が予想できる。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%82%A6%E3%83%A0%E7%9C%9F%E7%90%86%E6%95%99%E3%81%AE%E6%AD%B4%E5%8F%B2" className="underline">オウム真理教の歴史</a></h4>
            <p>関連して貼っておきます。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E8%87%AA%E5%BE%8B%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0_(%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88)" className="underline">自律システム(インターネット)</a></h4>
            <p>私がASNと知った時に読んだ記事でした。</p>
          </div>
          <div>
            <h4 className="text-lg"><a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%88%E3%83%BB%E3%83%95%E3%82%A1%E3%82%A4%E3%82%A2%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%AB" className="underline">グレート・ファイアウォール</a></h4>
            <p>グレート・ファイアウォール(金盾)について日本語で最も優れた記事です。</p>
          </div>
        </div>
      </div>
    </>
  );
}
