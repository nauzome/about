import Lag from '../../part/lag';
import Nav from '../../part/en_nav';
import Bar from '../../part/bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='about'>
                    <p>わからないことをわからないと言える強さ、何も言わない優しさを。</p>
                </div>
            </div>
            <Bar />
        </>
    );
}