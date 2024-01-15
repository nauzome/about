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
        <img src="/media/animation_speechballoon.webp" alt="animation_speechballoon.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:report_title')}</h2>
        <div className="overflow-x-auto max-w-full">
          <table className="border-collapse table-auto w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-4 border-b border-slate-100">{t('common:report_table_1')}</th>
                <th className="p-4 border-b border-slate-100">{t('common:report_table_2')}</th>
                <th className="p-4 border-b border-slate-100">{t('common:report_table_3')}</th>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100"><a className="text-blue-700 dark:text-blue-400" href="https://misskey.io/@hitari">@hitari@misskey.io</a></td>
                <td className="p-4 border-b border-slate-100">2022-07-31</td>
                <td className="p-4 border-b border-slate-100">100(JPY)</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100"><a className="text-blue-700 dark:text-blue-400" href="https://misskey.io/@harunon">@harunon@misskey.io</a></td>
                <td className="p-4 border-b border-slate-100">2022-07-21</td>
                <td className="p-4 border-b border-slate-100">100(JPY)</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100"><a className="text-blue-700 dark:text-blue-400" href="https://msk.ilnk.info/@woxin_chang_dan1904_">@woxin_chang_dan1904_@msk.ilnk.info</a></td>
                <td className="p-4 border-b border-slate-100">2022-07-21</td>
                <td className="p-4 border-b border-slate-100">300(JPY)</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100"><a className="text-blue-700 dark:text-blue-400" href="https://twitter.com/darekasann_zzz">@darekasann_zzz@twitter.com</a></td>
                <td className="p-4 border-b border-slate-100">2022-07-13</td>
                <td className="p-4 border-b border-slate-100">0.00053496(BTC)</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-slate-100"><a className="text-blue-700 dark:text-blue-400" href="https://msk.ilnk.info/@woxin_chang_dan1904_">@woxin_chang_dan1904_@msk.ilnk.info</a></td>
                <td className="p-4 border-b border-slate-100">2022-06-26</td>
                <td className="p-4 border-b border-slate-100">400(JPY)</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
