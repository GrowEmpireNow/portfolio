import { FC } from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

type HeroSMProps = {};

const HeroSM: FC<HeroSMProps> = () => {
  return (
    <div className='mt-5 flex flex-wrap gap-8'>
      {/* Linkedin */}
      <a
        href='https://www.linkedin.com/company/empire-now/'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaLinkedinIn /> <span className='text-xs'>Linkedin</span>
      </a>
      {/* Insta */}
      <a
        href='https://www.instagram.com/growempirenow/'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaInstagram /> <span className='text-xs'>Instagram</span>
      </a>
      {/* Twitter */}
      <a
        href='https://twitter.com/DannyLev4/with_replies'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaTwitter /> <span className='text-xs'>Twitter</span>
      </a>
      <Link href='/contact' className='flex items-center gap-1'>
        <MdEmail /> <span className='text-xs'>Message</span>
      </Link>
    </div>
  );
};

export default HeroSM;
