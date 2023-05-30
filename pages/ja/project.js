import Lag from '../../part/lag';
import Nav from '../../part/ja_nav';
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
                    <h2>aipictors</h2>
                    <p>aipictorsのサイトの開発メンバーです。</p>
                    <p><a class='link' href='https://www.aipictors.com/user/?id=nz'>プロフィール</a>、<a class='link' href='https://www.github.com/nauzome'>github</a></p>
                    <h2>Torノードについて。</h2>
                    <p>詳しくは <a class='link' href='https://tornode.nauzome.org/'>tornode.nauzome.org</a> を参考にしてほしいですが軽く書きます。</p>
                    <p>ram:1GBのサーバーで一般ノードを2022年1月2日ぐらいから運営しています。</p>
                    <h2>検閲回避ミラーについて。</h2>
                    <h4>メインアドレス</h4>
                    <ul>
                        <li><a class='link' href='https://mirror.nauzome.org/'>mirror.nauzome.org</a></li>
                    </ul><h4>サブアドレス</h4>
                    <ul>
                        <li><a href='https://piwxucfuoi.nauzome.org/'>piwxucfuoi.nauzome.org</a></li>
                        <li><a class='link' href='https://tk2k9si3j1.nauzome.org/'>tk2k9si3j1.nauzome.org</a></li>
                    </ul>
                    <p>ブロックされた場合はサブアドレスをご利用ください。</p>
                    <p>またバックドア、ウイルスはありません。</p>
                    <h2>家出少女/少年プロジェクト(廃止)</h2>
                    <p>今思えばランダムにリプライを送信するアカウントは自分の正義に燃えていた、これは批判されたとおりスパムだと思う、ただページをインスタンスの管理者がリンクすることは良い方法だと思う。</p>
                    <p><s>私はネカマを趣味としていました、それは人を騙すことでありもう足を洗いました。</s></p>
                    <p><s>ただその時に避妊具なしで性行為を行おうとするアカウントが多数見つけられました。</s></p>
                    <p><s>これは深刻な問題だと考えました。</s></p>
                    <p><s>ほとんどがネカマであるのは確かかもしれないですただ1割いたら1割のために動きたいと考えました。</s></p>
                    <p>詳細: <a class='link' href='https://runaway.nauzome.org/'>runaway.nauzome.org</a></p>
                </div>
            </div>
            <Bar />
        </>
    );
}