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
        <img src="/media/animation_magnifyingglasstiltedleft.webp" alt="animation_magnifyingglasstiltedleft.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:work_title')}</h2>
        <p>{t('common:work_about_1')}</p>
        <p>{t('common:work_about_2')}</p>
        <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
          <ul className="list-decimal list-inside">
            <li>{t('common:work_answerlist_1')}</li>
            <li></li>
            <ul className="mx-5 list-decimal list-inside">
              <li>{t('common:work_answerlist_2')}</li>
              <li>{t('common:work_answerlist_3')}</li>
              <li>{t('common:work_answerlist_4')}</li>
              <li>{t('common:work_answerlist_5')}</li>
              <li>{t('common:work_answerlist_6')}</li>
            </ul>
            <li>{t('common:work_answerlist_7')}</li>
            <li>{t('common:work_answerlist_8')}</li>
            <li>{t('common:work_answerlist_9')}</li>
          </ul>
        </div>
        <p>{t('common:work_contact')}</p>
      </div>
    </>
  );
}
