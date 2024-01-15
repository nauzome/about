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
        <img src="/media/animation_customs.webp" alt="animation_customs.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:privacy_title')}</h2>
        <p>{t('common:privacy_about_1')}</p>
        <p>{t('common:privacy_about_2')}</p>
        <h4 className="text-xl">{t('common:privacy_getdata_title')}</h4>
        <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
          <ul className="list-decimal list-inside">
            <li>{t('common:privacy_getdata_answerlist_1')}</li>
            <li>{t('common:privacy_getdata_answerlist_2')}</li>
            <li>{t('common:privacy_getdata_answerlist_3')}</li>
            <li>{t('common:privacy_getdata_answerlist_4')}</li>
            <li>{t('common:privacy_getdata_answerlist_5')}</li>
            <li>{t('common:privacy_getdata_answerlist_6')}</li>
            <li>{t('common:privacy_getdata_answerlist_7')}</li>
          </ul>
        </div>
        <h4 className="text-xl">{t('common:privacy_note_title')}</h4>
        <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
          <ul className="list-decimal list-inside">
            <li>{t('common:privacy_note_answerlist_1')}</li>
            <li>{t('common:privacy_note_answerlist_2')}</li>
            <li>{t('common:privacy_note_answerlist_3')}</li>
            <li>{t('common:privacy_note_answerlist_4')}</li>
          </ul>
        </div>
        <h4 className="text-xl">{t('common:privacy_publicdata_title')}</h4>
        <p>{t('common:privacy_publicdata_about')}</p>
        <div className="p-4 border-solid border-1 border-slate-300 dark:border-white rounded">
          <ul className="list-decimal list-inside">
            <li>{t('common:privacy_publicdata_answerlist_1')}</li>
            <li>{t('common:privacy_publicdata_answerlist_2')}</li>
            <li>{t('common:privacy_publicdata_answerlist_3')}</li>
            <li>{t('common:privacy_publicdata_answerlist_4')}</li>
          </ul>
        </div>
        <p>{t('common:privacy_date')}</p>
      </div>
    </>
  );
}
