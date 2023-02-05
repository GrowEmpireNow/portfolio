import { FC } from 'react';
import Image from 'next/image';

import logo from '/public/images/logo.png';

type HeroImageProps = {
  text?: string;
};

const HeroImage: FC<HeroImageProps> = (props) => {
  const { text = 'Empire Now logo' } = props;
  return (
    <div className='rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg p-[3px] ring-[5px] ring-purple-500/10'>
      <div className='rounded-full w-16 h-16 overflow-hidden'>
        <Image
          src={logo}
          alt={text}
          priority
          width={70}
          height={70}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default HeroImage;
