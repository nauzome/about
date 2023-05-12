import Lag from '../../lag';
import Nav from '../../en_nav';
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
                    <p>I often go to misskey. Messenger is addicted to tox.chat. </p>
                    <p>For cover.pm and privatetech.at services, please contact cover@cover.pm, etc., and we will get back to you within 24 hours. <br />However, please call the number below for items that are listed as urgent in the terms. </p>
                    <ul>
                        <li class='tel'><a href='tel:+817084122063'><img src='/8fb30075e4e81271522525e4029f24f4.webp'></img></a></li>
                        <li class='misskey'><a href='https://misskey.nauzome.com/@nauzome'><img src='/6fbc3e1f0be41c5f32bcd5b6c8a997e1.webp'></img></a></li>
                        <li class='github'><a href='https://github.com/nauzome/'><img src='/5bbdf49092bba2418c2ae99321e4f398.webp'></img></a></li>
                        <li class='twitter'><a href='https://twitter.com/nauzome'><img src='/a6cfdc9bd1af000e784e897739621be0.webp'></img></a></li>
                    </ul>
                    <p>For other contacts<a class='link' href='/certification/meta.json'>meta.json</a>Please Confirm.<br />meta.json is absolute and my external and internal contact.</p>
                </div>
            </div>
            <Bar />
        </>
    );
}