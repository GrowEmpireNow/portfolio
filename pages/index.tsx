import Form from '@/components/Form';
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
      <main className='px-5 py-20 min-h-screen relative flex md:items-center'>
        <div className='container relative z-20 mx-auto'>
          <div className='flex flex-col gap-2 md:gap-8 text-center'>
            <h1 className='text-6xl md:text-9xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
              Danny Lev
            </h1>
            <p className='text-base md:text-2xl opacity-70'>
              I&apos;m too busy creating other companies&apos; sites :)
            </p>
          </div>

          <Form />
        </div>
        {/* <div className='absolute inset-0 pointer-events-none top-auto left-auto w-3/6 -right-48 -bottom-48 aspect-square opacity-70 rounded-full bg-red-600 filter blur-xl' /> */}
      </main>
    </>
  );
}
