import Lag from '../../part/lag';
import Nav from '../../part/zhcn_nav';
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
                    <h2>关于 Tor 节点。 </h2>
                    <p>详情请参考<a class='link' href='https://tornode.nauzome.org/'>tornode.nauzome.org</a>，但我会轻描淡写。 </p>
                    <p>ram：我们从 2022 年 1 月 2 日左右开始在 1GB 服务器上运行一个通用节点。 </p>
                    <h2>关于反审查镜像。 </h2>
                    <h4>主要地址</h4>
                    <ul>
                        <li><a class='link' href='https://mirror.nauzome.org/'>mirror.nauzome.org</a></li>
                    </ul><h4>子地址</h4>
                    <ul>
                        <li><a href='https://piwxucfuoi.nauzome.org/'>piwxucfuoi.nauzome.org</a></li>
                        <li><a class='link' href='https://tk2k9si3j1.nauzome.org/'>tk2k9si3j1.nauzome.org</a></li>
                    </ul>
                    <p>如果被屏蔽，请使用子地址。 </p>
                    <p>没有后门或病毒。 </p>
                    <h2>离家出走的女孩/男孩项目（已停产）</h2>
                    <p>现在想想，那个随机回复的账号本身就是在燃烧自己的正气，我认为这是被批评的垃圾邮件，但我认为页面由实例管理员链接是个好主意。 . </p>
                    <p><s>我以前有个嗜好是Nekama，就是骗人的，我已经洗过脚了。 </s></p>
                    <p><s>然而，我们发现当时有许多账户试图在没有避孕的情况下发生性行为。 </s></p>
                    <p><s>我认为这是一个严重的问题。 </s></p>
                    <p><s>他们中的大多数人可能确实是nekama。 </s></p>
                    <p>详情：<a class='link' href='https://runaway.nauzome.org/'>runaway.nauzome.org</a></p>
                </div>
            </div>
            <Bar />
        </>
    );
}