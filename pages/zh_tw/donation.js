import Lag from '../../lag';
import Nav from '../../zhtw_nav';
import Bar from '../../bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class="content donation basc_html">
                    <div class="title_image_box">
                        <img src="/228f70b7dc28abd9442ddad1c4da67ea.webp"></img>
                    </div>
                    <p>なお寄付された額や目的は<a class="link" href="/zh_tw/report">透明性レポート</a>で発行されます。</p>
                </div>
            </div>
            <Bar />
        </>
    );
}