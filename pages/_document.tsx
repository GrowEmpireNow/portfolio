import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='ltr' lang='en'>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <meta charSet='UTF-8' />

        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='' />

        {/* twitter - start */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@dannylev4' />
        <meta name='twitter:creator' content='@dannylev4' />
        {/* twitter - end */}

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
