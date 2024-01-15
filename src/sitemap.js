/** @type {import('next-sitemap').IConfig} */  // このコードがあるとコード補完が可能になる

module.exports = {
    siteUrl: 'https://about.nauzo.me/',               // envファイルにデフォルトでアクセス可能
    outDir: './mapbuild/',                             // SSGだとビルド後にoutディレクトリができるので合わせる
    generateRobotsTxt: true, // (optional).      // robots.txtが必要な場合は指定する
    // ...other options
  };