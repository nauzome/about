import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslation from 'next-translate/useTranslation';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, lang } = useTranslation('common')
  return (
    <>
      <div className="grid gap-3 w-full">
        <img src="/media/animation_heartonfire.webp" alt="animation_heartonfire.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:contact_title')}</h2>
        <div className="grid gap-3 lg:gap-5 grid-cols-3 sm:grid-cols-5 lg:grid-cols-7">
          <div className="py-3 px-2 text-center border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="mailto:nauzome@nauzome.com">
              <div className="grid gap-2">
                <span className="text-4xl"><i className="bi bi-inbox"></i></span>
                <span>Email</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 text-center border-solid border-1 border-slate-300 dark:border-white rounded">
            <div className="grid gap-2">
              <span className="text-4xl"><i className="bi bi-signal"></i></span>
              <span>Signal</span>
            </div>
          </div>

          <div className="py-3 px-2 text-center border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="https://t.me/nauzome">
              <div className="grid gap-2">
                <span className="text-4xl"><i className="bi bi-telegram"></i></span>
                <span>Telegram</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 text-center border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="tel:+817084122063">
              <div className="grid gap-2">
                <span className="text-4xl"><i className="bi bi-telephone"></i></span>
                <span>Tel</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 text-center border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="https://www.youtube.com/@nauzome">
              <div className="grid gap-2">
                <span className="text-4xl"><i className="bi bi-youtube"></i></span>
                <span>YouTube</span>
              </div>
            </a>
          </div>
          <div className="py-3 px-2 text-center border-solid border-1 border-slate-300 dark:border-white rounded">
            <a href="/certification/meta.json">
              <div className="grid gap-2">
                <span className="text-4xl"><i className="bi bi-three-dots"></i></span>
                <span>{t('common:contact_more')}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
