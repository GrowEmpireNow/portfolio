import { FC } from 'react';
import Container from './Container';
import { format } from 'date-fns';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type FeedProps = {
  feedList: {
    id: string;
    title: string;
    link?: string;
    date: string;
    video: string;
    imageLink: string;
    richText: { html: string };
  }[];
};

const Feed: FC<FeedProps> = (props) => {
  const { feedList } = props;

  return (
    <section className='pt-20 pb-5'>
      <Container>
        <ul className='flex flex-col gap-9'>
          {feedList.map((item) => (
            <li key={item.id}>
              {item.link ? (
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'
                  href={item.link}>
                  {item.video ? (
                    <div className='max-w-full aspect-video mb-8'>
                      <ReactPlayer
                        width={'100%'}
                        height={'100%'}
                        url={item.video}
                      />
                    </div>
                  ) : null}
                  {/*  && !item.link */}
                  {item.imageLink ? (
                    <div className='max-w-full aspect-video mb-8 relative'>
                      <Image
                        className='rounded'
                        src={item.imageLink}
                        alt=''
                        width={584}
                        height={320}
                      />
                    </div>
                  ) : null}
                  <h3 className='text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90'>
                    {item.title}
                  </h3>
                  {/* {console.log(item)} */}
                  <p className='text-rose-100/70'>
                    {format(new Date(item.date), 'MMM dd yyyy')}
                  </p>
                  {item.richText.html ? (
                    <article
                      className='prose prose-base prose-rose prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-lg mt-4 prose-p:text-rose-100/70 transition-all duration-500 overflow-hidden'
                      dangerouslySetInnerHTML={{ __html: item.richText.html }}
                    />
                  ) : null}
                </a>
              ) : (
                <div className='block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>
                  {item.video ? (
                    <div className='max-w-full aspect-video mb-8'>
                      <ReactPlayer
                        width={'100%'}
                        height={'100%'}
                        url={item.video}
                      />
                    </div>
                  ) : null}
                  <h3 className='text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90'>
                    {item.title}
                  </h3>
                  <p className='text-rose-100/70'>
                    {format(new Date(item.date), 'MMM dd')}
                  </p>
                  {item.richText.html ? (
                    <article
                      className='prose prose-base prose-rose prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-lg mt-4 prose-p:text-rose-100/70 transition-all duration-500 overflow-hidden'
                      dangerouslySetInnerHTML={{ __html: item.richText.html }}
                    />
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Feed;
