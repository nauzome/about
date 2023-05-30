import Lag from '../../part/lag';
import Nav from '../../part/ja_nav';
import Bar from '../../part/bar';
import Report from '../../part/report';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <Report />
            </div>
            <Bar />
        </>
    );
}