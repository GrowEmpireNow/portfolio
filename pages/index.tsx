import Background from '@/components/Background';
import Hero from '@/components/home/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny Lev</title>
        <meta name='description' content='CMO as a Service' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-5 md:pt-48 pt-10 pb-20 py-20 min-h-screen relative'>
        <Hero text="I'm too busy creating other companies' sites :)" />
        <Background />
      </main>
    </>
  );
}
