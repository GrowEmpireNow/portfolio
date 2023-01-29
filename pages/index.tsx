import Hero from '@/components/home/Hero';
import Head from 'next/head';
import Image from 'next/image';

import bg from '/public/images/bg_gradient.jpeg';

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
        {/* <Hero /> */}

        <div className='pointer-events-none absolute inset-0 overflow-hidden w-full max-w-[1500px] mx-auto'>
          <div style={{ transform: 'translateY(0px)' }}>
            <Image
              src={bg}
              alt=''
              className='w-full h-full mix-blend-multiply will-change-transform object-cover mx-auto xl:min-h-0 min-h-[30vh] opacity-[0.3]'
            />
          </div>
        </div>

        <svg
          className='pointer-events-none w-full h-full inset-0 fixed isolate z-50 opacity-70 mix-blend-soft-light'
          width='100%'
          height='100%'>
          <filter id='pedroduarteisalegend'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.80'
              numOctaves='4'
              stitchTiles='stitch'></feTurbulence>
          </filter>
          <rect
            width='100%'
            height='100%'
            filter='url(#pedroduarteisalegend)'></rect>
        </svg>
      </main>
    </>
  );
}
