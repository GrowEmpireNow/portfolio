import { FC } from 'react';
import Background from '@/components/Background';
import Hero from '@/components/home/Hero';
import Head from 'next/head';
import { getSocial } from '@/services';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

type homeProps = {
  socials: {
    id: string;
    link: string;
    embed: string;
  }[];
};

export async function getStaticProps() {
  const socials = (await getSocial()) || [];

  return {
    props: {
      socials,
    },
  };
}

const home: FC<homeProps> = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Empire Now</title>
        <meta
          name='description'
          content="Empire Now is a CMO as a Service consultancy for B2B SaaS startups. DM to take your marketing to the next level. That's how empires are built 💪"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />

        <meta name='robots' content='follow, index' />
        <meta property='og:url' content={`domain`} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/og_image.png' />
        <meta property='og:site_name' content='' />
        <meta
          property='og:description'
          content="Empire Now is a CMO as a Service consultancy for B2B SaaS startups. DM to take your marketing to the next level. That's how empires are built 💪"
        />
        <meta property='og:title' content='Empire Now' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@dannylev4' />
        <meta name='twitter:title' content='Empire Now' />
        <meta
          name='twitter:description'
          content="Empire Now is a CMO as a Service consultancy for B2B SaaS startups. DM to take your marketing to the next level. That's how empires are built 💪"
        />
        <meta name='twitter:image' content='/og_image.png' />
        <link rel='canonical' href='domain' />
      </Head>
      <main className='px-5 md:pt-48 pt-10 pb-20 py-20 min-h-screen relative'>
        <Hero isContact={false} />
        <Background />
        <FloatingCTA />
      </main>
      <Footer />
    </>
  );
};
export default home;
