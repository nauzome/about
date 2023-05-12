import Lag from '../../lag';
import Nav from '../../zhtw_nav';
import Bar from '../../bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='content contact'>
                    <div class='title_image_box'>
                        <img src='/c40b2da5776fde77f111fe32e9102935.webp'></img>
                    </div>
                    <p>我經常去miskey。 Messenger 沉迷於 tox.chat。 </p>
                    <p>如需cover.pm和privatetech.at服務，請聯繫cover@cover.pm等，我們將在24小時內回复您。 <br />
                        但是，對於條款中列為緊急的項目，請撥打以下號碼。 </p>
                    <ul>
                        <li class='tel'><a href='tel:+817084122063'><img src='/8fb30075e4e81271522525e4029f24f4.webp'></img></a></li>
                        <li class='misskey'><a href='https://misskey.nauzome.com/@nauzome'><img src='/6fbc3e1f0be41c5f32bcd5b6c8a997e1.webp'></img></a></li>
                        <li class='github'><a href='https://github.com/nauzome/'><img src='/5bbdf49092bba2418c2ae99321e4f398.webp'></img></a></li>
                        <li class='twitter'><a href='https://twitter.com/nauzome'><img src='/a6cfdc9bd1af000e784e897739621be0.webp'></img></a></li>
                    </ul>
                    <p>檢查 <a class='link' href='/certification/meta.json'>meta.json</a> 以獲取更多聯繫人。 <br />meta.json 是絕對和我的外部和內部聯繫。 </p>と</div>
            </div>
            <Bar />
        </>
    );
}