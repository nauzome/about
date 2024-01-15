import Image from "next/image";
import { Inter } from "next/font/google";
import useTranslation from 'next-translate/useTranslation';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t, lang } = useTranslation('common')
  return (
    <>
      <div className="grid gap-3 w-full">
        <img src="/media/animation_laptop.webp" alt="animation_laptop.webp" className="w-32" />
        <h2 className="text-4xl">{t('common:developer_title')}</h2>
        <p>{t('common:developer_about_me')}</p>
        <div>
          <h3 className="text-xl">{t('common:developer_rule')}</h3>
          <ul className="list-disc list-inside">
            <li>{t('common:developer_list_not_radius')}</li>
            <li>{t('common:developer_list_4color')}</li>
            <li>{t('common:developer_list_contrast')}</li>
            <li>{t('common:developer_list_9999')}</li>
            <li>{t('common:developer_list_mobile')}</li>
            <li>{t('common:developer_list_classname')}</li>
            <li>{t('common:developer_list_margin')}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">{t('common:developer_size_title')}</h3>
          <p>{t('common:developer_size_webpake')}</p>
          <p>{t('common:developer_size_build_lsrcipt')}</p>
        </div>
        <div>
          <h3 className="text-xl">{t('common:developer_regulation_title')}</h3>
          <p>{t('common:developer_regulation_images_dl_1')}</p>
          <p>{t('common:developer_regulation_images_dl_2')}</p>
          <p>{t('common:developer_regulation_images_dl_3')}</p>
          <p>{t('common:developer_regulation_images_dl_4')}</p>
        </div>
        <div>
          <h3 className="text-xl">{t('common:developer_legacy_title')}</h3>
          <p>{t('common:developer_legacy_not_1')}</p>
          <p>{t('common:developer_legacy_not_2')}</p>
          <p>{t('common:developer_legacy_not_3')}</p>
        </div>
        <div>
          <h3 className="text-xl">{t('common:developer_mobile_title')}</h3>
          <p>{t('common:developer_mobile_action_1')}</p>
          <p>{t('common:developer_mobile_action_2')}</p>
          <p>{t('common:developer_mobile_over')}</p>
          <img
            src="/media/developer_mobile.webp"
            width="1000"
            height="1000"
            alt=""
            className="w-full max-w-5xl my-3 mx-auto"
          />
        </div>
        <div>
          <h3 className="text-xl">{t('common:developer_darkmode_title')}</h3>
          <p>{t('common:developer_darkmode_userview')}</p>
          <img
            src="/media/developer_darkwindow.webp"
            width="1000"
            height="1000"
            alt=""
            className="w-full max-w-5xl my-3 mx-auto"
          />
        </div>
        <div>
          <h3 className="text-xl">{t('common:developer_usecolor_title')}</h3>
          <div className="grid gap-4 my-4">
            <div className="grid gap-3">
              <h4 className="text-xl">{t('common:developer_usecolor_basecolor')}</h4>
              <ul className="grid gap-2 lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-white"></span>
                  <span className="absolute text-black">white</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-black"></span>
                  <span className="absolute text-white">black</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-maxblue"></span>
                  <span className="absolute text-white">maxblue</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <h4 className="text-xl">{t('common:developer_usecolor_blue')}</h4>
              <ul className="grid gap-2 lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-100"></span>
                  <span className="absolute text-white">blue-100</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-200"></span>
                  <span className="absolute text-white">blue-200</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-300"></span>
                  <span className="absolute text-white">blue-300</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-400"></span>
                  <span className="absolute text-white">blue-400</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-500"></span>
                  <span className="absolute text-white">blue-500</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-600"></span>
                  <span className="absolute text-white">blue-600</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-700"></span>
                  <span className="absolute text-white">blue-700</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-blue-800"></span>
                  <span className="absolute text-white">blue-800</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <h4 className="text-xl">{t('common:developer_usecolor_zinc')}</h4>
              <ul className="grid gap-2 lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-100"></span>
                  <span className="absolute text-white">zinc-100</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-200"></span>
                  <span className="absolute text-white">zinc-200</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-300"></span>
                  <span className="absolute text-white">zinc-300</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-400"></span>
                  <span className="absolute text-white">zinc-400</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-500"></span>
                  <span className="absolute text-white">zinc-500</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-600"></span>
                  <span className="absolute text-white">zinc-600</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-700"></span>
                  <span className="absolute text-white">zinc-700</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-zinc-800"></span>
                  <span className="absolute text-white">zinc-800</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <h4 className="text-xl">{t('common:developer_usecolor_gray')}</h4>
              <ul className="grid gap-2 lg:grid-cols-8 sm:grid-cols-4 grid-cols-2">
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-100"></span>
                  <span className="absolute text-white">gray-100</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-200"></span>
                  <span className="absolute text-white">gray-200</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-300"></span>
                  <span className="absolute text-white">gray-300</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-400"></span>
                  <span className="absolute text-white">gray-400</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-500"></span>
                  <span className="absolute text-white">gray-500</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-600"></span>
                  <span className="absolute text-white">gray-600</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-700"></span>
                  <span className="absolute text-white">gray-700</span>
                </li>
                <li className="relative grid justify-items-center items-center overflow-hidden shadow dark:bg-gray-800 rounded-sm">
                  <span className="inline-block w-full h-16 bg-gray-800"></span>
                  <span className="absolute text-white">gray-800</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
