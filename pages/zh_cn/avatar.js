import Lag from '../../lag';
import Nav from '../../zhcn_nav';
import Bar from '../../bar';
import Avatar from '../../avatar';
export default function Layout({ children }) {
    return (
        <>
            <div class='background-image'>
            </div>
            <Lag />
            <div className='web'>
                <Nav />
                <Avatar />
            </div>
            <Bar />
            <style jsx>{`
.avatar_3{
mask-image: url('/bd6ef7c9daec0f781b3db2e1a0066312.webp');
}
.background-image{
background-image: url('/6912009451ddd3bfef166e4ff0ac9ada.webp');
}
body{
background-color: #000000 !important;
}
.nav > ul > li > a{
color: #ffffff;
}
`}</style>
        </>
    );
}