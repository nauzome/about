import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="grid gap-3 w-full">
        <img src="/media/animation_telephone.webp" alt="animation_telephone.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:license_title')}</h2>
        <div>
          <h3 className="text-xl">GoodBoyResistance</h3>
          <ul>
            <li><a className="underline" href="https://t.me/addstickers/GoodBoyResistance">https://t.me/addstickers/GoodBoyResistance</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">LINE Seed</h3>
          <ul>
            <li><a className="underline" href="https://seed.line.me/index_jp.html">https://seed.line.me/index_jp.html</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">luisvinicius167/ityped</h3>
          <ul>
            <li><a className="underline" href="https://github.com/luisvinicius167/ityped">https://github.com/luisvinicius167/ityped</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">otadesign font</h3>
          <ul>
            <li><a className="underline" href="https://jypg.net/works/1464">https://jypg.net/works/1464</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">twemoji</h3>
          <ul>
            <li><a className="underline" href="https://twemoji.twitter.com/">https://twemoji.twitter.com/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">icons bootstrap</h3>
          <ul>
            <li><a className="underline" href="https://icons.getbootstrap.com/">https://icons.getbootstrap.com/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">getpublii</h3>
          <ul>
            <li><a className="underline" href="https://getpublii.com/">https://getpublii.com/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">Clker-Free-Vector-Images</h3>
          <ul>
            <li><a className="underline" href="https://pixabay.com/ja/vectors/23439/">https://pixabay.com/ja/vectors/23439/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">destyle.css</h3>
          <ul>
            <li><a className="underline" href="https://nicolas-cusan.github.io/destyle.css/">https://nicolas-cusan.github.io/destyle.css/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">サンタの帽子</h3>
          <ul>
            <li><a className="underline" href="https://pixabay.com/ja/vectors/%e3%82%b5%e3%83%b3%e3%82%bf%e3%81%ae%e5%b8%bd%e5%ad%90-%e3%82%af%e3%83%aa%e3%82%b9%e3%83%9e%e3%82%b9-7622212/">https://pixabay.com/ja/vectors/サンタの帽子-クリスマス-7622212/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">misskey-dev/assets</h3>
          <ul>
            <li><a className="underline" href="https://github.com/misskey-dev/assets">https://github.com/misskey-dev/assets</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">pixelfed/brand-assets</h3>
          <ul>
            <li><a className="underline" href="https://github.com/pixelfed/brand-assets">https://github.com/pixelfed/brand-assets</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">Tarikul-Islam-Anik/Telegram-Animated-Emojis</h3>
          <ul>
            <li><a className="underline" href="https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis">https://github.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">鏡餅のイラスト</h3>
          <ul>
            <li><a className="underline" href="https://www.irasutoya.com/2012/03/blog-post_5171.html">https://www.irasutoya.com/2012/03/blog-post_5171.html</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">雑煮おせち料理お節料理</h3>
          <ul>
            <li><a className="underline" href="https://pixabay.com/ja/photos/%E9%9B%91%E7%85%AE-%E3%81%8A%E3%81%9B%E3%81%A1%E6%96%99%E7%90%86-%E3%81%8A%E7%AF%80%E6%96%99%E7%90%86-7709209/">https://pixabay.com/ja/photos/%E9%9B%91%E7%85%AE-%E3%81%8A%E3%81%9B%E3%81%A1%E6%96%99%E7%90%86-%E3%81%8A%E7%AF%80%E6%96%99%E7%90%86-7709209/</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">bard</h3>
          <ul>
            <li><a className="underline" href="https://g.co/bard/share/8cb1353d09e7">https://g.co/bard/share/8cb1353d09e7</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
