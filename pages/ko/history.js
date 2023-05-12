import Lag from '../../lag';
import Nav from '../../ko_nav';
import Bar from '../../bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='content errorhistory basc_html'>
                    <div class='alert'>
                        <p>This page is only available in Japanese.Please browse from <a class='link' href='/ja/history'>here</a>.</p>
                    </div>
                </div>
            </div>
            <Bar />
        </>
    );
}