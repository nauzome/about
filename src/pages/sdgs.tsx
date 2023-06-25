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
          <div className="relative w-full aspect-video my-4 bg-maxblue overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/22a5f8ebba2e81116bd4869c84d7f2bb.webp"
                width="1500"
                height="1500"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">Sdgs</h2>
            </div>
          </div>
          <p>
            SDGDの完全に支持する訳ではありませんが誰一人取り残さないことなどは大切な事だと思っています。
          </p>
          <p>
            また、下に書いていない事も大切な事ですし知る事から始めています。
          </p>
          <div className="grid gap-2 lg:grid-cols-2 my-2">
            <div className="bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="grid gap-4 sm:gap-2 sm:grid-cols-3 items-center text-center sm:text-left m-5 ms:m-2">
                <Image
                  src="/SDG_Icons_Inverted_Transparent_WEB-04.webp"
                  width="500"
                  height="500"
                  alt=""
                  className="w-2/4 sm:w-full mx-auto sm:mx-0"
                />
                <div className="lg:col-span-2">
                  <p className="text-2xl">知識を提供する支援</p>
                  <p className="text-lg">Torノードの運営など</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="grid gap-4 sm:gap-2 sm:grid-cols-3 items-center text-center sm:text-left m-5 ms:m-2">
                <Image
                  src="/SDG_Icons_Inverted_Transparent_WEB-07.webp"
                  width="500"
                  height="500"
                  alt=""
                  className="w-2/4 sm:w-full mx-auto sm:mx-0"
                />
                <div className="lg:col-span-2">
                  <p className="text-2xl">電力など</p>
                  <p className="text-lg">グリーンなプロバイダーの選択</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="grid gap-4 sm:gap-2 sm:grid-cols-3 items-center text-center sm:text-left m-5 ms:m-2">
                <Image
                  src="/SDG_Icons_Inverted_Transparent_WEB-12.webp"
                  width="500"
                  height="500"
                  alt=""
                  className="w-2/4 sm:w-full mx-auto sm:mx-0"
                />
                <div className="lg:col-span-2">
                  <p className="text-2xl">物を大切にします</p>
                  <p className="text-lg">修理できるものは修理するなど</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-gray-800 border-2 border-blue-500 dark:border-slate-500 border-solid">
              <div className="grid gap-4 sm:gap-2 sm:grid-cols-3 items-center text-center sm:text-left m-5 ms:m-2">
                <Image
                  src="/SDG_Icons_Inverted_Transparent_WEB-16.webp"
                  width="500"
                  height="500"
                  alt=""
                  className="w-2/4 sm:w-full mx-auto sm:mx-0"
                />
                <div className="lg:col-span-2">
                  <p className="text-2xl">発言する力</p>
                  <p className="text-lg">
                    小さなプラットホームとして全ての人に手段を選ばずに発言する力を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
