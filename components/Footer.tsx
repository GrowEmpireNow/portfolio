import { FC } from 'react';
import Link from 'next/link';
import Container from './Container';
import HeroImage from './HeroImage';
import HeroSM from './HeroSM';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='bg-gradient-to-t from-rose-600/10 via-purple-600/10 to-transparent'>
      <Container>
        <div className='md:grid md:grid-cols-5 flex flex-col gap-9 md:gap-1 justify-between items-center pt-20 pb-12'>
          <div className='flex'>
            <Link href='/'>
              <HeroImage />
            </Link>
          </div>
          <div className='-mt-5 md:col-span-3 md:flex md:justify-center'>
            <HeroSM />
          </div>

          <p className='text-sm md:flex md:justify-end'>
            © {new Date().getFullYear()} Danny Lev
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
