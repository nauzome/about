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
          <div className="grid gap-2 sm:grid-cols-3">
            <a href="https://youtu.be/8VxyuMqVmbs">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/4344fb67959c68bcfc8d8a83ec27cb48.webp"
              />
            </a>
            <a href="https://youtu.be/59QoLo8PWNM">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/eef51a06e1b79637124508f8f17a01f3.webp"
              />
            </a>
            <a href="https://youtu.be/2uiD7_72zhk">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/f781b1a855c1bc9d64ab1b604e8b4856.webp"
              />
            </a>
            <a href="https://youtu.be/5FkUV5JeQ1Q">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/d2d12e9150c7ba788d2f4345b265be14.webp"
              />
            </a>
            <a href="https://youtu.be/IdekFd3D6q8">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/6108ece9a94dcf812ecd924840ef11f2.webp"
              />
            </a>
            <a href="https://youtu.be/uIoowBAD-iA">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/ad4f9464684e59cb731817cd3aa48728.webp"
              />
            </a>
            <a href="https://youtu.be/KnZiXszhx7g">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/6f7dfcccaa67a2d5d37ed6a03d3babaf.webp"
              />
            </a>
            <a href="https://youtu.be/uiUjLAzySIM">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/538f3d45cdb154da2dbf63fb6659d039.webp"
              />
            </a>
            <a href="https://youtu.be/bsTOYb7a8is">
              <Image
                alt=""
                width="1000"
                height="1000"
                src="/a0ebdaf03e1126ebf44c419b1e392cee.webp"
              />
            </a>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
