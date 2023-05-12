
import Lag from '../../lag';
import Nav from '../../en_nav';
import Bar from '../../bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='content afctivity basc_html'>
                    <div class='title_image_box'>
                        <img src='/c69d973b5aa8270351784c2c49e04667.webp'></img>
                    </div>
                    <h2>About Tor nodes.</h2>
                    <p>For more information<a class='link' href='https://tornode.nauzome.org/'>tornode.nauzome.org</a>I would like you to refer to it, but I will write it lightly.</p>
                    <p>ram: We are operating a general node on a 1GB server from around January 2, 2022.</p>
                    <h2>About censorship evasion mirrors.</h2>
                    <h4>main address</h4>
                    <ul>
                        <li><a class='link' href='https://mirror.nauzome.org/'>mirror.nauzome.org</a></li>
                    </ul>
                    <h4>sub address</h4>
                    <ul>
                        <li><a href='https://piwxucfuoi.nauzome.org/'>piwxucfuoi.nauzome.org</a></li>
                        <li><a class='link' href='https://tk2k9si3j1.nauzome.org/'>tk2k9si3j1.nauzome.org</a></li>
                    </ul>
                    <p>If blocked, please use sub-address.</p>
                    <p>There are no backdoors or viruses. </p>
                    <h2>Runaway Girl/Boy Project (discontinued)</h2>
                    <p>Now that I think about it, the account that sent random replies was burning with its own righteousness, I think this is spam as criticized, but I think it's a good idea for the page to be linked by the instance's admin. . </p>
                    <p><s>I used to have a hobby of Nekama, it's about deceiving people and I've already washed my feet. </s></p>
                    <p><s>However, we found many accounts who tried to have sex without contraceptives at that time. </s></p>
                    <p><s>I thought this was a serious problem. </s></p>
                    <p><s>It may be true that most of them are nekama. </s></p>
                    <p>detail: <a class='link' href='https://runaway.nauzome.org/'>runaway.nauzome.org</a></p>
                </div>
            </div>
            <Bar />
        </>
    );
}