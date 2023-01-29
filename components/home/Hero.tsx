import { FC } from 'react';
import Image from 'next/image';
import Container from '../Container';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import danny from '/public/images/danny.jpeg';
import Link from 'next/link';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='md:pt-48 pt-10 pb-20'>
      <Container>
        <div className='flex items-center space-x-6'>
          <div className='rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg p-[3px] ring-[5px] ring-purple-500/10'>
            <div className='rounded-full w-16 h-16 overflow-hidden'>
              <Image
                src={danny}
                alt='Danny Lev'
                priority
                width={70}
                height={70}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div>
            <h1 className='text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
              Danny Lev
            </h1>
            <p className='text-rose-100/60'>CMO as a Service</p>
          </div>
        </div>
        <p className='align-middle text-lg leading-6 text-rose-100/60 mt-5 md:mt-9'>
          I&apos;m too busy creating other companies&apos; sites :)
        </p>
        <div className='mt-5 flex gap-8'>
          <a
            href='https://www.linkedin.com/in/dannylev/'
            target='_blank'
            rel='noreferrer noopener'
            className='flex items-center gap-1'>
            <FaLinkedinIn /> <span className='text-xs'>Linkedin</span>
          </a>
          <Link
            href='/contact'
            target='_blank'
            rel='noreferrer noopener'
            className='flex items-center gap-1'>
            <MdEmail /> <span className='text-xs'>Message</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
