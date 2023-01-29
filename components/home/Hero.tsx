import { FC } from 'react';
import Container from '../Container';
import HeroImage from '../HeroImage';
import HeroContent from '../HeroContent';
import HeroSM from '../HeroSM';

type HeroProps = { isShowSM?: boolean; text: string; title?: string };

const Hero: FC<HeroProps> = (props) => {
  const { isShowSM = true } = props;

  return (
    <header>
      <Container>
        <div className='flex items-center space-x-6'>
          <HeroImage />
          <HeroContent title={props.title} />
        </div>
        <p className='align-middle text-lg leading-6 text-rose-100/60 mt-5 md:mt-9'>
          {props.text}
        </p>
        {isShowSM ? <HeroSM /> : null}
      </Container>
    </header>
  );
};

export default Hero;
