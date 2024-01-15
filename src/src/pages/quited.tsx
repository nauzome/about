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
        <img src="/media/animation_zzz.webp" alt="animation_zzz.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:quited_title')}</h2>
        <div className="flex items-center gap-2 p-2 border-solid border-1 border-slate-300 dark:border-white rounded">
          <span className="text-2xl"><span className="bi bi-exclamation-triangle-fill"></span></span>
          <p>{t('common:quited_about')}</p>
        </div>
        <div>
          <h3 className="text-xl"><a href="https://www.aipictors.com/" className="underline">{t('common:quited_ai_title')}</a></h3>
          <p><s>{t('common:quited_ai')}</s></p>
        </div>
        <div>
          <h3 className="text-xl"><a href="https://tornode.nauzome.org/" className="underline">{t('common:quited_torrelay_title')}</a></h3>
          <p><s>{t('common:quited_torrelay')}</s></p>
        </div>
        <div>
          <h3 className="text-xl"><a href="https://mirror.nauzome.org/" className="underline">{t('common:quited_mirror_title')}</a></h3>
          <h4>{t('common:quited_mirror_1')}メインアドレス</h4>
          <ul>
            <li><a className="underline" href="https://mirror.nauzome.org/">mirror.nauzome.org</a></li>
          </ul>
          <h4>{t('common:quited_mirror_2')}</h4>
          <ul>
            <li><a className="underline" href="https://piwxucfuoi.nauzome.org/">piwxucfuoi.nauzome.org</a></li>
            <li><a className="underline" href="https://tk2k9si3j1.nauzome.org/">tk2k9si3j1.nauzome.org</a></li>
          </ul>
          <p><s>{t('common:quited_mirror_3')}</s></p>
          <p><s>{t('common:quited_mirror_4')}</s></p>
        </div>
        <div>
          <h3 className="text-xl"><a href="https://runaway.nauzome.org/" className="underline">{t('common:quited_runaway_title')}</a></h3>
          <p>{t('common:quited_runaway_1')}</p>
          <p><s>{t('common:quited_runaway_2')}</s></p>
          <p><s>{t('common:quited_runaway_3')}</s></p>
          <p><s>{t('common:quited_runaway_4')}</s></p>
          <p><s>{t('common:quited_runaway_5')}</s></p>
        </div>
      </div>
    </>
  );
}
