import { FC } from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

type HeroSMProps = {
  showMessage?: boolean;
};

const HeroSM: FC<HeroSMProps> = (props) => {
  const { showMessage = false } = props;
  return (
    <div className='mt-5 flex flex-wrap gap-5 md:gap-8'>
      {/* Linkedin */}
      <a
        href='https://www.linkedin.com/company/empire-now/'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaLinkedinIn className='text-lg' />{' '}
        <span className='text-lg'>Linkedin</span>
      </a>
      {/* Insta */}
      <a
        href='https://www.instagram.com/growempirenow/'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaInstagram className='text-lg' />{' '}
        <span className='text-lg'>Instagram</span>
      </a>
      {/* Twitter */}
      <a
        href='https://twitter.com/DannyLev4/with_replies'
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1'>
        <FaTwitter className='text-lg' />{' '}
        <span className='text-lg'>Twitter</span>
      </a>
      {showMessage ? (
        <a
          target='_blank'
          rel='noreferrer'
          href='https://calendly.com/lev-danny/30min'
          className='flex items-center gap-1'>
          <MdEmail className='text-lg' />{' '}
          <span className='text-lg'>Let&apos;s Talk</span>
        </a>
      ) : null}
    </div>
  );
};

export default HeroSM;
