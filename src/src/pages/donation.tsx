import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslation from 'next-translate/useTranslation';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, lang } = useTranslation('common')
  return (
    <>
      <div className="grid gap-3 w-full">
        <img src="/media/animation_megaphone.webp" alt="animation_megaphone.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:donation_title')}</h2>
        <p><a className="underline" href="report">{t('common:donation_report')}</a></p>
      </div>
    </>
  );
}
