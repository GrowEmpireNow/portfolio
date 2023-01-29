import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='ltr' lang='en'>
      <Head>
        <link
          href='https://api.fontshare.com/v2/css?f[]=general-sans@1,2&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='antialiased font-general bg-[#1b1816] text-slate-50 selection:bg-purple-500/90 selection:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
