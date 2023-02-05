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
    <section className='pt-16 pb-5'>
      <Container>
        <ul className='flex flex-col gap-12'>
          {props.feedList.map((item) => (
            <li
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              key={item.id}>
              <a href={item.link}>
                <h3>{item.title}</h3>
                <p>{format(new Date(item.date), 'MMM dd')}</p>
                {item.description ? <p>{item.description}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Feed;
