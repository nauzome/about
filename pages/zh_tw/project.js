import Lag from '../../part/lag';
import Nav from '../../part/zhtw_nav';
import Bar from '../../part/bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='content project basc_html'>
                    <div class='title_image_box'>
                        <img src='/c69d973b5aa8270351784c2c49e04667.webp'></img>
                    </div>
                    <h2>關於 Tor 節點。</h2>
                    <p>詳情請參考<a class='link' href='https://tornode.nauzome.org/'>tornode.nauzome.org</a>，但我會輕描淡寫。</p>
                    <p>ram：我們從 2022 年 1 月 2 日左右開始在 1GB 服務器上運行一個通用節點。</p>
                    <h2>關於反審查鏡像。</h2>
                    <h4>主要地址</h4>
                    <ul>
                        <li><a class='link' href='https://mirror.nauzome.org/'>mirror.nauzome.org</a></li>
                    </ul>
                    <h4>子地址</h4>
                    <ul>
                        <li><a href='https://piwxucfuoi.nauzome.org/'>piwxucfuoi.nauzome.org</a></li>
                        <li><a class='link' href='https://tk2k9si3j1.nauzome.org/'>tk2k9si3j1.nauzome.org</a></li>
                    </ul>
                    <p>如果被屏蔽，請使用子地址。</p>
                    <p>沒有後門或病毒。</p>
                    <h2>離家出走的女孩/男孩項目（已停產）</h2>
                    <p>現在想想，那個隨機回复的賬號本身就是在燃燒自己的正氣，我認為這是被批評的垃圾郵件，但我認為頁面由實例管理員鏈接是個好主意。 .</p>
                    <p><s>我以前有個嗜好是Nekama，就是騙人的，我已經洗過腳了。</s></p>
                    <p><s>然而，我們發現當時有許多賬戶試圖在沒有避孕的情況下發生性行為。</s></p>
                    <p><s>我認為這是一個嚴重的問題。</s></p>
                    <p><s>他們中的大多數人可能確實是nekama。</s></p>
                    <p>詳情：<a class='link' href='https://runaway.nauzome.org/'>runaway.nauzome.org</a></p></div>
            </div>
            <Bar />
        </>
    );
}