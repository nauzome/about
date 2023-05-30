import Lag from '../../part/lag';
import Nav from '../../part/ko_nav';
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
                    <h2>Tor 노드 정보.</h2>
                    <p>자세한 내용은<a class='link' href='https://tornode.nauzome.org/'>tornode.nauzome.org</a>참고하시면 좋겠지만 글을 남깁니다 가볍게.</p>
                    <p>ram: 2022년 1월 2일경부터 1GB 서버에서 일반 노드를 운영하고 있습니다.</p>
                    <h2>검열 회피 미러 정보</h2>
                    <h4>주 주소</h4>
                    <ul>
                        <li><a class='link' href='https://mirror.nauzome.org/'>mirror.nauzome.org</a></li>
                    </ul>
                    <h4>하위 주소</h4>
                    <ul>
                        <li><a href='https://piwxucfuoi.nauzome.org/'>piwxucfuoi.nauzome.org</a></li>
                        <li><a class='link' href='https://tk2k9si3j1.nauzome.org/'>tk2k9si3j1.nauzome.org</a></li>
                    </ul>
                    <p>차단된 경우 하위 주소를 사용하세요.</p>
                    <p>백도어나 바이러스가 없습니다. </p>
                    <h2>가출 소녀/소년 프로젝트(중단)</h2>
                    <p>지금 생각해보면 랜덤 답글을 보낸 계정은 나름의 의로움으로 불타고 있었는데, 이건 욕먹을 만큼 스팸인 것 같지만 인스턴스의 관리자가 페이지를 링크하는 것도 좋은 아이디어라고 생각합니다. . </p>
                    <p><s>예전에 네카마라는 취미가 있었는데 사람을 속이는 것인데 벌써 발을 씻었다. </s></p>
                    <p><s>하지만 당시 피임 없이 성관계를 시도한 계정을 많이 발견했습니다. </s></p>
                    <p><s>심각한 문제라고 생각했습니다. </s></p>
                    <p><s>대부분이 네카마인 것은 사실일지도 모릅니다. </s></p>
                    <p>세부정보: <a class='link' href='https://runaway.nauzome.org/'>runaway.nauzome.org</a></p>
                </div>
            </div>
            <Bar />
        </>
    );
}