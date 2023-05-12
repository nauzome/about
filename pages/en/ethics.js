import Lag from '../../lag';
import Nav from '../../en_nav';
import Bar from '../../bar';
export default function Layout({ children }) {
    return (
        <>
            <Lag />
            <div className='web'>
                <Nav />
                <div class='content ethics basc_html'>
                    <div class='title_image_box'>
                        <img src='/7a48f7578f07627c635e5186a88e8890.webp'></img>
                    </div>
                    <p>This is Nauzome's Code of Ethics. Don't force it on others. </p>
                    <p>Created: 2022-12-22</p>
                    <h2>Do not slander or participate in attacks. </h2>
                    <p>I will not deny my character or participate in attacks. That includes glorifying violence. </p>
                    <h2>No lynching. </h2>
                    <p>Lynching (including activities such as identification) should not be done even if it is in the public interest. However, illegal data may be reported to the police. </p>
                    <p>However, I will not expose it. </p>
                    <h2>Don't rely too much on the majority. </h2>
                    <p>Don't overestimate what the majority or famous people have done. Stop and think if it's right. Also value your opinion. </p>
                    <h2>Do not reveal secrets. </h2>
                    <p>We will manage the server safely so that even the smallest secret will not be leaked, and we will also take measures against artificial leaks. </p>
                    <h2>Censored, not deleted. </h2>
                    <p>No matter how much I dislike ([1]), I won't delete it. We will only remove terms that were created in the public interest. </p>
                    <p>Even if the information is disadvantageous to me, I will not erase it or make it invisible. </p>
                    <p>1: Don't delete it just because you don't like it. Because don't forget that there is freedom of speech and it's an enforcement of my values. </p>
                    <h2>I will not do anything that is not moderated. </h2>
                    <p>There is a difference between not being moderated and not being deleted and being moderated and not being deleted. </p>
                    <p>We will review and respond to all reports. Even if it runs out of resources it will close. </p>
                    <h2>No propaganda. </h2>
                    <p>No propaganda, Sakura. This includes pretending to be your supporter. </p>
                    <h2>Do not violate a clearly written license. </h2>
                    <p>We do not infringe licenses except vague licenses and free data. </p>
                    <p>An ambiguous license is one that doesn't say where and how it can be used. </p>
                </div>

            </div>
            <Bar />
        </>
    );
}