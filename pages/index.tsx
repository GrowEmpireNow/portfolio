import { FC } from 'react';
import Background from '@/components/Background';
import Hero from '@/components/home/Hero';
import Head from 'next/head';
import { getFeed } from '@/services';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import Feed from '@/components/Feed';

type homeProps = {
  feedList: {
    id: string;
    title: string;
    description: string;
    link: string;
    date: string;
  }[];
};

export async function getStaticProps() {
  const feedList = (await getFeed()) || [];

  return {
    props: {
      feedList,
    },
    revalidate: 3600,
  };
}

const home: FC<homeProps> = ({ feedList }) => {
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
        <meta property='og:url' content={`empirenow.io`} /> {/*  */}
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
        {/*  */}
        <meta name='twitter:title' content='Empire Now' />
        <meta
          name='twitter:description'
          content="Empire Now is a CMO as a Service consultancy for B2B SaaS startups. DM to take your marketing to the next level. That's how empires are built 💪"
        />
        <meta name='twitter:image' content='/og_image.png' />
        <link rel='canonical' href='empirenow.io' />
        {/*  */}
      </Head>
      <main className='px-5 md:pt-48 pt-10 pb-20 py-20 min-h-screen relative'>
        <Hero isContact={false} />
        <Background />
        <Feed feedList={feedList} />
        <FloatingCTA />
      </main>
      <Footer />
    </>
  );
};
export default home;
