import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <title>Nz</title>
        <link rel="shortcut icon" href="/i.svg" type="image/svg+xml" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no,viewport-fit=cover"
        />
      </Head>
      <body className="text-zinc-700 dark:text-white dark:bg-gray-700">
        <Main />
        <NextScript />
        <script>
          {`

// Hello Im Nauzome.
// nauzo.me/mk/

`}
        </script>
      </body>
    </Html>
  );
}
