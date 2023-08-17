import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="lg:col-start-3 lg:col-end-13">
        <div className="py-3 lg:py-10">
          <div className="grid gap-5 lg:py-5 lg:px-4 lg:rounded lg:border-2 lg:border-slate-300 lg:border-solid w-full ">
            <h2 className="text-3xl">なうぞめの求人</h2>
            <p>以下の条件でなうぞめは求人を探しています。</p>
            <p>
              雇ってくれる人若しくは良さげな求人情報があればご連絡お願いします。
            </p>
            <div className="py-3 px-4 bg-blue-100 dark:text-white dark:bg-gray-800 rounded">
              <ul className="list-decimal list-inside text-blue-700">
                <li>仕事内容が以下に該当している</li>
                <ul className="mx-5 list-decimal list-inside">
                  <li>データーの仕分け</li>
                  <li>簡単な開発</li>
                  <li>簡単なサーバーの保守</li>
                  <li>PCのキッティング</li>
                  <li>ネットワークキッティング</li>
                </ul>
                <li>お給与が時給換算である</li>
                <li>当方は学生の為、学生でもお仕事可能である</li>
                <li>1週間以上の契約</li>
              </ul>
            </div>
            <p>なお、nauzome@nauzome.com にご連絡ください。</p>
          </div>
        </div>
      </div>
    </>
  );
}
