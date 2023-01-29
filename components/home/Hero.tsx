import { FC } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='container relative z-20 mx-auto'>
      <div className='flex flex-col gap-2 md:gap-8 text-center'>
        <h1 className='text-6xl md:text-9xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
          Danny Lev
        </h1>
        <p className='text-base md:text-2xl opacity-70'>
          I&apos;m too busy creating other companies&apos; sites :)
        </p>
      </div>
    </header>
  );
};

export default Hero;
