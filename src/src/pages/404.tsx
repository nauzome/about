import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <pre className="w-max my-40 mx-auto">　　　　　　　　 ,-､　　　　　　　　　　　　,.-､ <br />　　　　　　　 ./:::::＼　　　　　　　　　 ／::::::ヽ <br />　　　　　　　/::::::::::::;ゝ--──-- ､._/::::::::::::::| <br />　　　　　　 /,.-‐''"´ 　　　　　　　　 ＼:::::::::::| <br />　　　　　／　 　　　　　　　　　　　　　　ヽ､::::| <br />　　　　/　　　　　　　　　　　　　　　　　　　ヽ| <br />　　 　 l　　　　　　　　　　 　 　 　 　 　 　 　 l <br />　　　 .|　　　 ●　　　　　　　　　　　　　　　　|　　　　404 ERROR<br />　 　 　l　　, , ,　　　　　　　　　　　●　　　　 l <br />　　　　` ､　　　　　　(_人__丿　　　　､､､ 　 /　 <br />　　　　　　`ｰ ､__　　　　　　　　　　 　 　 ／ <br />　　　　　　　　　/`'''ｰ‐‐──‐‐‐┬'''""´ </pre>
    </>
  );
}
