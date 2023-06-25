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
                src="/c4ca4238a0b923820dcc509a6f75849b.webp"
                width="1500"
                height="1500"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">Ethics</h2>
            </div>
          </div>
          <p>
            これはなうぞめの倫理観規定です。他人に強制するものではありません。
          </p>
          <p>作成: 2022-12-22</p>
          <div className="my-4">
            <h2 className="text-2xl">中傷したり攻撃に加担しません。</h2>
            <p>
              人格を否定したり攻撃に参加しません。それには暴力の称賛も含まれます。
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">私刑をしません。</h2>
            <p>
              私刑(特定などの活動を含む)は公共の利益があったとしてもしてはいけません。ただ違法なデーターを警察に通報することはあります。
            </p>
            <p>ただ、晒などはしません。</p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">多数決に過信しません。</h2>
            <p>
              多数決や有名な人が行ったことを過信しません。立ち止まってそれが正しいか考えます。また自分の意見を大切にします。
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">秘密を漏らしません。</h2>
            <p>
              どんなに小さな秘密も漏らさないようにサーバーを安全に管理して人為的な漏洩にも対策します。
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">検閲、削除しません。</h2>
            <p>
              どんなに私が嫌いなもの([1])であってもそれを削除しません。削除するのは公共的な利益を考慮して作成された規約のみです。
            </p>
            <p>
              たとえ自分に不利な情報だとしても消したり、見えなくしたりしません。
            </p>
            <p>
              1:
              嫌いだからといって削除はしてはいけない。なぜなら言論の自由がある事を忘れてはいけないし私の価値観の強制だから。
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">モデレートしない事をしません。</h2>
            <p>
              モデレート出来ていなくて削除できていないのとモデレートして削除しないのは別です。
            </p>
            <p>
              すべての通報を確認して対応します。たとえそれにリソースが足りなくなったら閉鎖します。
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">プロパガンダをしません。</h2>
            <p>
              プロパガンダ、さくらをしません。これには自分の支持者のふりをするなどが該当します。
            </p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl">
              明確に書かれたライセンスを侵害しません。
            </h2>
            <p>
              曖昧なライセンスやフリーのデーターを除きライセンス侵害をしません。
            </p>
            <p>
              曖昧なライセンスとはどこでどのように利用していいか書いていないものです。
            </p>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
