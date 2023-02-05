import { FC } from 'react';
import Background from '@/components/Background';
import Hero from '@/components/home/Hero';
import Head from 'next/head';
import BackButton from '@/components/BackButton';
import Form from '@/components/contact/Form';
import Footer from '@/components/Footer';

type contactProps = {};

const contact: FC<contactProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Contact | Danny Lev</title>
        <meta name='description' content='CMO as a Service' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='flex flex-col min-h-screen justify-between'>
        <main className='md:pt-48 pt-10 pb-20 px-5 py-20 relative'>
          <BackButton />
          <Hero title='Contact' isShowSM={false} isContact={true} />
          <Form />
          <Background />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default contact;
