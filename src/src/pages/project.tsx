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
        <img src="/media/animation_dizzy.webp" alt="animation_dizzy.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:project_title')}</h2>
        <div className="flex items-center gap-2 p-2 border-solid border-1 border-slate-300 dark:border-white rounded">
          <span className="text-2xl"><span className="bi bi-exclamation-triangle-fill"></span></span>
          <p><a href="//abuse.cover.pm/" className="underline">{t('common:project_alert')}</a></p>
        </div>
        <div>
          <h3 className="text-xl">
            <a href="https://pixelfed.moe/" className="underline">Pixelfed.moe</a>
          </h3>
          <p>{t('common:project_moe_about_1')}</p>
          <p>{t('common:project_moe_about_2')}</p>
          <p>{t('common:project_moe_about_3')}</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a href="https://misskey.pm/" className="underline">Misskey.pm</a>
          </h3>
          <p>{t('common:project_pm_about_1')}</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a href="https://mstdn.wiki/" className="underline">Mstdn.wiki</a>
          </h3>
          <p>Mastodon Wiki can now be viewed on a used domain.</p>
          <p>Please refer to <a href="https://notify.mstdn.wiki/" className="underline">notify</a> for announcements.</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a href="https://live.nauzome.com/" className="underline">@live</a>
          </h3>
          <p>Broadcast to authorized users on Twitch and YouTube.</p>
          <p>It is a 24-hour broadcasting station.</p>
        </div>
        <div>
          <h3 className="text-xl">
            <a href="https://metrics.torproject.org/rs.html#search/nauzome" className="underline">TorRelay(2024)</a>
          </h3>
          <p>In 2024, we got funding and restarted TorRelay.</p>
          <p>We are very proud to support the free speech and privacy rights of people in various communities.</p>
        </div>
        <p><a href="quited" className="underline">{t('common:project_quited')}</a></p>
      </div>
    </>
  );
}
