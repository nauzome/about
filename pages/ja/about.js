import Lag from '../../part/lag';
import Nav from '../../part/ja_nav';
import Bar from '../../part/bar';
export default function Layout({ children }) {
  return (
    <>
      <Lag />
      <div className='web'>
        <Nav />
        <div class='about'>
          <div class='about_flex about_flex_r'>
            <div class="itme_1"><img class='at9x16 at9x16_cx' src='/about_6.jpg'></img></div>
            <div class="itme_2"><p>花粉症です。</p></div>
         </div>
         <div class='about_flex'>
          <div class="itme_1"><img class='at9x16 at9x16_cc' src='/about_5.png'></img></div>
          <div class="itme_2"><p>自称技術者です。</p></div>
         </div>
         <div class='about_flex about_flex_r'>
            <div class="itme_1"><img class='at9x16 at9x16_gz' src='/about.jpg'></img></div>
            <div class="itme_2"><p>私はインフラが大好きです。</p></div>
          </div>
          <div class='about_flex'>
            <div class="itme_1"><img class='at9x16 at9x16_co' src='/about_4.jpg'></img></div>
            <div class="itme_2"><p>Aiお絵描き楽しいです。</p></div>
          </div>
          <div class='about_flex about_flex_r'>
            <div class="itme_1"><img class='at9x16 at9x16_cc' src='/about_3.jpg'></img></div>
            <div class="itme_2"><p>ラーメンが好きです。<br />よく日高屋や幸楽苑に行きます。</p></div>
          </div>
          <div class='about_flex'>
            <div class="itme_1"><img class='at9x16 at9x16_cx' src='/about_2.jpg'></img></div>
            <div class="itme_2"><p>自宅はVDSLです。</p></div>
          </div>
        </div>
      </div>
      <Bar />
    </>
  );
}