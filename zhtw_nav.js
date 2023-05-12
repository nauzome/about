import Link from "next/link";
export default function Nav() {
    return (
        <div class="nav">
            <h1><a class="season" href="/en/about"><img class="seasonimg" src="/014fc8895cdc3124ba35f20de37d6872.webp"></img></a></h1>
            <ul>
                <li><Link href="/zh_tw/about">about</Link></li>
                <li><a href="https://blog.nauzome.com/">Blog</a></li>
                <li><Link href="/zh_tw/contact">contact</Link></li>
                <li><Link href="/zh_tw/avatar">avatar</Link></li>
                <li><Link href="/zh_tw/donation">Donation</Link></li>
                <li><Link href="/zh_tw/afctivity">afctivity</Link></li>
                <li><Link href="/zh_tw/ethics">ethics</Link></li>
                <li><Link href="/zh_tw/history">history</Link></li>
                <li><Link href="/zh_tw/license">license</Link></li>
                <li class="tagb"><a href="#lag">language</a></li>
            </ul>
        </div>
    );
}