import Lag from '../../lag';
import Nav from '../../ja_nav';
import Bar from '../../bar';
export default function Layout({ children }) {
  return (
    <>
      <Lag />
      <div className='web'>
        <Nav />
        <div class='content contact'>
          <div class='title_img_box'>
            <img src='/c40b2da5776fde77f111fe32e9102935.webp'></img>
          </div>
          <p>misskeyによくいます。メッセンジャーはtox.chatにハマっています。</p>
          <p>cover.pm、privatech.atのサービス群についてはcover@cover.pmなどに連絡してください、24時間以内に返信します。<br />
            ただ規約で緊急性があると記載された項目に関しては以下の電話番号に電話をおかけください。</p>
          <ul>
            <li class='tel'><a href='tel:+817084122063'><img src='/8fb30075e4e81271522525e4029f24f4.webp'></img></a></li>
            <li class='misskey'><a href='https://misskey.nauzome.com/@nauzome'><img src='/6fbc3e1f0be41c5f32bcd5b6c8a997e1.webp'></img></a></li>
            <li class='github'><a href='https://github.com/nauzome/'><img src='/5bbdf49092bba2418c2ae99321e4f398.webp'></img></a></li>
            <li class='twitter'><a href='https://twitter.com/nauzome'><img src='/a6cfdc9bd1af000e784e897739621be0.webp'></img></a></li>
          </ul>
          <p>その他の連絡先については<a class='link' href='/certification/meta.json'>meta.json</a>を確認してください。<br />meta.jsonは絶対であり私の外部、内部の連絡先です。</p>
        </div>
      </div>
      <Bar />
    </>
  );
}