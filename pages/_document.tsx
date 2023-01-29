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
      <body className='antialiased font-general text-slate-50 bg-gradient-to-br from-[#141E30] to-[#243B55]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
