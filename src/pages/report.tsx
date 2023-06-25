import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="z-10 relative grid max-w-6xl w-full mx-auto">
        <Nav />
        <div className="my-3">
          <div className="m-6 md:m-2">
            <Image
              src="/8dbda686bfe37574fb1a51c92287caca.webp"
              width="500"
              height="500"
              alt=""
              className="w-full md:w-44"
            />
          </div>
          <div className="overflow-x-auto max-w-full">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="p-4 pl-8 border-b border-slate-100">金額</th>
                  <th className="p-4 pl-8 border-b border-slate-100">時間</th>
                  <th className="p-4 pl-8 border-b border-slate-100">寄付額</th>
                </tr>
                <tr>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    <a
                      className="text-blue-700 dark:text-blue-400"
                      href="https://misskey.io/@hitari"
                    >
                      @hitari@misskey.io
                    </a>
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    2022-07-31
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    100(JPY)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    <a
                      className="text-blue-700 dark:text-blue-400"
                      href="https://misskey.io/@harunon"
                    >
                      @harunon@misskey.io
                    </a>
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    2022-07-21
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    100(JPY)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    <a
                      className="text-blue-700 dark:text-blue-400"
                      href="https://msk.ilnk.info/@woxin_chang_dan1904_"
                    >
                      @woxin_chang_dan1904_@msk.ilnk.info
                    </a>
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    2022-07-21
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    300(JPY)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    <a
                      className="text-blue-700 dark:text-blue-400"
                      href="https://twitter.com/darekasann_zzz"
                    >
                      @darekasann_zzz@twitter.com
                    </a>
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    2022-07-13
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    0.00053496(BTC)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    <a
                      className="text-blue-700 dark:text-blue-400"
                      href="https://msk.ilnk.info/@woxin_chang_dan1904_"
                    >
                      @woxin_chang_dan1904_@msk.ilnk.info
                    </a>
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    2022-06-26
                  </td>
                  <td className="p-4 pl-8 border-b border-slate-100">
                    400(JPY)
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
