import styles from "./styles.scss";
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>nauzome！</title>
        <meta property="twitter:card" content="summary" />
        <meta property="og:title" content="This is Nauzome's site." />
        <meta property="og:site_name" content="about.nazuo.me" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://about.nauzo.me/28c7fa61dc5a615bda5f6fec686c0fe9.png" />
        <link rel="alternate" hreflang="ja" href="https://about.nauzo.me/ja/about" />
        <link rel="alternate" hreflang="en" href="https://about.nauzo.me/en/about" />
        <link rel="alternate" hreflang="ko" href="https://about.nauzo.me/ko/about" />
        <link rel="alternate" hreflang="zh_cn" href="https://about.nauzo.me/zh_cn/about" />
        <link rel="alternate" hreflang="zh_tw" href="https://about.nauzo.me/zh_tw/about" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp