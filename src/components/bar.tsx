import Link from "next/link";
export default function Bar() {
  return (
    <header className="grid gap-3">
      <ul className="flex gap-3 grow flex-wrap text-center">
        <li><Link href="license">license</Link></li>
        <li><a href="history">history</a></li>
        <li><a href="privacy">privacy</a></li>
        <li><Link href="donation">donation</Link></li>
        <li><a href="work">work</a></li>
        <li><a href="developer">developer</a></li>
        <li><a href="sitemap">SiteMap</a></li>
        <li><a href="language">language</a></li>
        <li><a href="https://misskey.pm/@nz">misskey.pm</a></li>
        <li><a href="https://pixelfed.moe/nz">pixelfed.moe</a></li>
        <li><a href="https://archive.nauzome.com/">archive</a></li>
        <li><a href="https://nojs.nauzome.com/">nojs</a></li>
        <li><a href="http://nauzome2l6y3m3qaaigxambvti32hd7tjaeupdvs2a66nr7koqikc4yd.onion/">.onion</a></li>
      </ul>
        <p className="uppercase">Unless otherwise specified, it is CC0.Please check the <a href="faq#copyright">FAQ</a> for details.</p>
    </header>
  );
}