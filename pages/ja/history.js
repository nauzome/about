import Lag from '../../part/lag';
import Nav from '../../part/ja_nav';
import Bar from '../../part/bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='content history'>
                    <div class='title_image_box history_image_box'>
                        <img src='/f5fe3d6f16fd80648d3d62c625bbf3df.webp'></img>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2006-XX-XX</div>
                        <div class='history_content'><h1>生まれる</h1><p>雨の日だったらしい</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2008-XX-XX</div>
                        <div class='history_content'><h1>掃除機に興味を持つ</h1><p>コードで遊ぶのが楽しかったらしい。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2018-XX-XX</div>
                        <div class='history_content'><h1>Torを知る</h1><p>英語が読めなくて断念する。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2020-XX-XX</div>
                        <div class='history_content'><h1>Tor上に書き込みを開始しする</h1><p>炎上はまだしていない。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2020-XX-XX</div>
                        <div class='history_content'><h1>Torでmisskeyインスタンスを発見する</h1><p>まだ、分散型SNSを理解していない。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2020-12-XX</div>
                        <div class='history_content'><h1>Tor経由のTwitterを開設</h1><p>その頃はvpnuserだった。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2022-01-XX</div>
                        <div class='history_content'><h1>Torノードを動かす</h1><p>のち、閉鎖のち再開する。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2022-XX-XX</div>
                        <div class='history_content'><h1>炎上する</h1><p>児童ポルノを放置した掲示板に警告を送り炎上する。<br />今でも一部は正しいと思っている。</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2022-XX-XX</div>
                        <div class='history_content'><h1>cover.pmを開設</h1><p>のち、閉鎖(2022-12-31ぐらい。)</p></div>
                    </div>
                    <div class='history_box'>
                        <div class='history_time'>2022-12-21</div>
                        <div class='history_content'><h1>Torの翻訳を開始</h1><p>最近はペースが落ちている。</p></div>
                    </div>
                </div>
            </div>
            <Bar />
        </>
    );
}