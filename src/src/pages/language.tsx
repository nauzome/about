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
        <img src="/media/animation_classicalbuilding.webp" alt="animation_classicalbuilding.webp" className="w-32" />
        <div>
          <p>{t('common:language_about_1')}</p>
          <p>{t('common:language_about_2')}</p>
        </div>
        <div className="grid gap-3 lg:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ar/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_eg.svg" alt="eg" className="w-14" />
                <span className="text-xl">عربي</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/be/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_be.svg" alt="be" className="w-14" />
                <span className="text-xl">Deutsch</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/bn/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_in.svg" alt="in" className="w-14" />
                <span className="text-xl">বাংলা</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/el/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_ki.svg" alt="ki" className="w-14" />
                <span className="text-xl">ελληνική γλώσσα</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/en/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_us.svg" alt="us" className="w-14" />
                <span className="text-xl">English</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/eo/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_pl.svg" alt="pl" className="w-14" />
                <span className="text-xl">esperanto</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/es/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_es.svg" alt="es" className="w-14" />
                <span className="text-xl">Español</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/fa/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_ir.svg" alt="ir" className="w-14" />
                <span className="text-xl">فارسی</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/fr/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_fr.svg" alt="fr" className="w-14" />
                <span className="text-xl">Français</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/hi/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_in.svg" alt="in" className="w-14" />
                <span className="text-xl">हिंदी</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/it/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_it.svg" alt="it" className="w-14" />
                <span className="text-xl">Italiano</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ja/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_jp.svg" alt="jp" className="w-14" />
                <span className="text-xl">日本語</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ja-ca/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_jp.svg" alt="jp" className="w-14" />
                <span className="text-xl">ねこ</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ja-fs/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_jp.svg" alt="jp" className="w-14" />
                <span className="text-xl">福島弁</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ja-ks/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_jp.svg" alt="jp" className="w-14" />
                <span className="text-xl">関西弁</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ko/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_kr.svg" alt="kr" className="w-14" />
                <span className="text-xl">한국어</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/pa/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_in.svg" alt="in" className="w-14" />
                <span className="text-xl">ਪੰਜਾਬੀ</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/pl/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_pl.svg" alt="pl" className="w-14" />
                <span className="text-xl">Polski</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/pt/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_pt.svg" alt="pt" className="w-14" />
                <span className="text-xl">Português</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/ru/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_ru.svg" alt="ru" className="w-14" />
                <span className="text-xl">Русский</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/zh-cn/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_cn.svg" alt="cn" className="w-14" />
                <span className="text-xl">简体中文</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/zh-tw/about">
              <div className="flex gap-2 flex-col items-center text-center">
                <img src="/media/language_tw.svg" alt="tw" className="w-14" />
                <span className="text-xl">繁體中文</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
