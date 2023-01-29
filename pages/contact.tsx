import { FC } from 'react';
import Background from '@/components/Background';
import Hero from '@/components/home/Hero';
import Head from 'next/head';
import BackButton from '@/components/BackButton';

type contactProps = {};

const contact: FC<contactProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Contact | Danny Lev</title>
        <meta name='description' content='CMO as a Service' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='md:pt-48 pt-10 pb-20 px-5 py-20 min-h-screen relative'>
        <BackButton />
        <Hero
          title='Contact'
          isShowSM={false}
          text="Kindly provide your email and I'll respond promptly."
        />
        <Background />
      </main>
    </>
  );
};

export default contact;