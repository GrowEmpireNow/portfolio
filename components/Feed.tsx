import { FC } from 'react';
import Container from './Container';
import { format } from 'date-fns';

type FeedProps = {
  feedList: {
    id: string;
    title: string;
    description?: string;
    link?: string;
    date: string;
  }[];
};

const Feed: FC<FeedProps> = (props) => {
  return (
    <section className='pt-20 pb-5'>
      <Container>
        <ul className='flex flex-col gap-9'>
          {props.feedList.map((item) => (
            <li key={item.id}>
              {item.link ? (
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'
                  href={item.link}>
                  <h3 className='text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90'>
                    {item.title}
                  </h3>
                  <p className='text-rose-100/70'>
                    {format(new Date(item.date), 'MMM dd')}
                  </p>
                  {item.description ? (
                    <p className='mt-4 text-lg text-rose-100/70 line-clamp-3'>
                      {item.description}
                    </p>
                  ) : null}
                </a>
              ) : (
                <div className='block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>
                  <h3 className='text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90'>
                    {item.title}
                  </h3>
                  <p className='text-rose-100/70'>
                    {format(new Date(item.date), 'MMM dd')}
                  </p>
                  {item.description ? (
                    <p className='mt-4 text-lg text-rose-100/70 line-clamp-3'>
                      {item.description}
                    </p>
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
