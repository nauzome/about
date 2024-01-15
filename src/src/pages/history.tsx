import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslation from 'next-translate/useTranslation';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, lang } = useTranslation('common')
  return (
    <>
      <div className="grid gap-3 w-full">
        <img src="/media/animation_moai.webp" alt="animation_moai.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:history_title')}</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2006-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_birthday_title')}</h1>
              <p>{t('common:history_birthday_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2008-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_machine_title')}</h1>
              <p>{t('common:history_machine_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2018-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_tor_title')}</h1>
              <p>{t('common:history_tor_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2020-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_wiretor_title')}</h1>
              <p>{t('common:history_wiretor_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2020-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_tormisskey_title')}</h1>
              <p>{t('common:history_tormisskey_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2020-12-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_twitter_title')}</h1>
              <p>{t('common:history_twitter_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2022-01-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_torrelay_title')}</h1>
              <p>{t('common:history_torrelay_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2022-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_fire_title')}</h1>
              <p>{t('common:history_fire_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2022-XX-XX</div>
            <div>
              <h1 className="text-xl">{t('common:history_cover_title')}</h1>
              <p>{t('common:history_cover_about')}</p>
            </div>
          </div>
          <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="my-2 text-2xl">2022-12-21</div>
            <div>
              <h1 className="text-xl">{t('common:history_translate_title')}</h1>
              <p>{t('common:history_translate_about')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
