import { FC } from 'react';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

type FloatingCTAProps = {};

const FloatingCTA: FC<FloatingCTAProps> = ({}) => {
  return (
    <Link
      href='/contact'
      className='fixed z-50 bg-rose-700/75 inset-0 top-auto left-auto bottom-5 flex justify-center items-center gap-3 right-5 md:px-8 font-semibold transition hover:bg-rose-700/40 p-4 rounded-full'>
      <span className='hidden md:block'>Contact</span> <FaEnvelope />
    </Link>
  );
};

export default FloatingCTA;
