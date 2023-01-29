import { FC } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

type HeroSMProps = {};

const HeroSM: FC<HeroSMProps> = () => {
  return (
    <div className='mt-5 flex gap-8'>
      <a
        href='https://www.linkedin.com/in/dannylev/'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaLinkedinIn /> <span className='text-xs'>Linkedin</span>
      </a>
      <Link href='/contact' className='flex items-center gap-1'>
        <MdEmail /> <span className='text-xs'>Message</span>
      </Link>
    </div>
  );
};

export default HeroSM;
