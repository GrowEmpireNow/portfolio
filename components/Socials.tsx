import { FC } from 'react';
import { LinkedInEmbed } from 'react-social-media-embed';
import Container from './Container';

type SocialsProps = {
  socials: {
    id: string;
    link: string;
    embed: string;
  }[];
};

const Socials: FC<SocialsProps> = ({ socials }) => {
  return (
    <section className='pt-16 pb-5'>
      <Container>
        <ul className='flex flex-col gap-12'>
          {socials.map((social) => (
            <li
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              key={social.id}>
              <LinkedInEmbed
                height={570}
                postUrl={social.link}
                url={social.embed}
                width='100%'
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Socials;
