import { FC } from 'react';
import Background from '@/components/Background';
import Hero from '@/components/home/Hero';
import { getFeed } from '@/services';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import Feed from '@/components/Feed';
import SEO from '@/components/home/SEO';

type homeProps = {
  feedList: {
    id: string;
    title: string;
    link: string;
    date: string;
    video: string;
    imageLink: string;
    richText: { html: string };
  }[];
};

export async function getStaticProps() {
  const feedList = (await getFeed()) || [];
  // console.log(feedList);

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
      <SEO />
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
