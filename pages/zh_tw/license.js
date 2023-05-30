import Lag from '../../part/lag';
import Nav from '../../part/zhtw_nav';
import Bar from '../../part/bar';
import License from '../../part/license';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <License />
            </div>
            <Bar />
        </>
    );
}