import { FC } from 'react';

type HeroContentProps = {
  title?: string;
  subTitle?: string;
};

const HeroContent: FC<HeroContentProps> = (props) => {
  const { title = 'Welcome to Empire Now', subTitle = 'CMO as a Service' } =
    props;

  return (
    <div>
      <h1 className='text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
        {title}
      </h1>
      <h2 className='text-rose-100/70'>{subTitle}</h2>
    </div>
  );
};

export default HeroContent;
