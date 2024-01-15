import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    var dir = 'ltr';
    if (locale === 'ar' || locale === 'fa') {
      var dir = 'rtl';
    }
    return (
      <Html lang={locale} dir={dir} className={dir}>{'\n'}
        <Head>{'\n'}
          <title>nauzome</title>{'\n'}
          <meta property="og:type" content="site" />{'\n'}
          <meta property="og:title" content="nauzome" />{'\n'}
          <meta property="og:description" content="Welcome to Nauzome's site! Created by wasting technology" />{'\n'}
          <meta property="og:image" content="https://about.nauzo.me/yser.png" />{'\n'}
          <meta property="twitter:card" content="summary_large_image" />{'\n'}
          <meta property="twitter:site" content="@nauzome" />{'\n'}
          <meta name="description" content="Welcome to Nauzome's site! Created by wasting technology" />{'\n'}
          <meta name="format-detection" content="email=no,telephone=no,address=no" />{'\n'}
          <link rel="shortcut icon" href="https://about.nauzo.me/i.svg" type="image/svg+xml" />{'\n'}
          <link rel="shortcut icon" href="https://about.nauzo.me/i.ico" type="image/x-icon" />{'\n'}
          <link rel="me" href="https://misskey.pm/@nz" />{'\n'}
          <link rel="me" href="https://pixelfed.moe/nz" />{'\n'}
        </Head>{'\n'}
        <body className="text-slate-700 dark:bg-slate-800 dark:text-white text-sm">
          <div className='hidden'>
            <a rel="me" href="https://misskey.pm/@nz">https://misskey.pm/@nz</a>
            <a rel="me" href="https://pixelfed.moe/nz">https://pixelfed.moe/nz</a>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;