import Lag from '../../part/lag';
import Nav from '../../part/ko_nav';
import Bar from '../../part/bar';
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
                    <p>미스키에 자주 갑니다. 메신저는 tox.chat에 중독되었습니다. </p>
                    <p>cover.pm 및 privatetech.at 서비스의 경우 cover@cover.pm 등으로 문의해 주시면 24시간 이내에 연락드리겠습니다. <br />단, 약관에 긴급히 기재되어 있는 사항은 아래 번호로 연락주시기 바랍니다. </p><ul>
                        <li class='tel'><a href='tel:+817084122063'><img src='/8fb30075e4e81271522525e4029f24f4.webp'></img></a></li>
                        <li class='misskey'><a href='https://misskey.nauzome.com/@nauzome'><img src='/6fbc3e1f0be41c5f32bcd5b6c8a997e1.webp'></img></a></li>
                        <li class='github'><a href='https://github.com/nauzome/'><img src='/5bbdf49092bba2418c2ae99321e4f398.webp'></img></a></li>
                        <li class='twitter'><a href='https://twitter.com/nauzome'><img src='/a6cfdc9bd1af000e784e897739621be0.webp'></img></a></li>
                    </ul>
                    <p>다른 연락처의 경우<a class='link' href='/certification/meta.json'>meta.json</a>확인하십시오.<br />meta.json은 절대적입니다. 내 외부 및 내부 연락처입니다.</p></div>
            </div>
            <Bar />
        </>
    );
}