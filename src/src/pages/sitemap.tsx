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
        <img src="/media/animation_toolbox.webp" alt="animation_toolbox.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:sitemap_title')}</h2>
        <div>
          <h2 className="text-xl">{t('common:sitemap_basepage')}</h2>
          <ul className="list-decimal list-inside">
            <li><a className="underline" href="/about">about</a></li>
            <li><a className="underline" href="/developer">Developer</a></li>
            <li><a className="underline" href="/donation">donation</a></li>
            <li><a className="underline" href="/faq">faq</a></li>
            <li><a className="underline" href="/history">history</a></li>
            <li><a className="underline" href="/project">project</a></li>
            <li><a className="underline" href="/report">report</a></li>
            <li><a className="underline" href="/work">work</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">{t('common:sitemap_superpage')}</h2>
          <ul className="list-decimal list-inside">
            <li><a className="underline" href="/404">404</a></li>
            <li><a className="underline" href="/language">language</a></li>
            <li><a className="underline" href="/sitemap">sitemap</a></li>
            <li><a className="underline" href="/license">license</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
