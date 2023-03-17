import { FC } from 'react';
import Head from 'next/head';
type SEOProps = {};

const SEO: FC<SEOProps> = ({}) => {
  return (
    <Head>
      <title>Empire Now</title>
      <meta
        name='description'
        content="Empire Now is a CMO as a Service consultancy for B2B SaaS startups. DM to take your marketing to the next level. That's how empires are built 💪"
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
      <meta name='robots' content='follow, index' />
      <meta property='og:url' content={`empirenow.io`} />
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
  );
};

export default SEO;
