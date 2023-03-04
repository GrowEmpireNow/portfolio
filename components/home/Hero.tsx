import { FC } from 'react';
import Container from '../Container';
import HeroImage from '../HeroImage';
import HeroContent from '../HeroContent';
import HeroSM from '../HeroSM';

type HeroProps = { isShowSM?: boolean; title?: string; isContact: boolean };

const Hero: FC<HeroProps> = (props) => {
  const { isShowSM = true } = props;

  return (
    <header>
      <Container>
        <div className='flex items-center space-x-6'>
          <HeroImage />
          <HeroContent title={props.title} />
        </div>
        {props.isContact ? (
          <div className='text-lg leading-6 text-rose-100/90 mt-5 md:mt-9'>
            <p>Let&apos;s kickstart your quest for marketing greatness</p>
          </div>
        ) : (
          <div className='flex flex-col space-y-3 text-base md:text-xl font-medium text-rose-100/90 mt-5 md:mt-9'>
            <p className='align-middle'>
              Tired of struggling with marketing on your own? want to take your
              startup to the next level, but don&apos;t know where to start?
            </p>
            <p className='align-middle'>
              EJump into our startup marketing blog Empire Now by Danny Lev.
            </p>
            <p className='align-middle'>Need more?</p>
            <p className='align-middle'>
              Empire Now offers CMO as a Service to help startups build out
              their marketing. Our team will create a tailored, data-driven
              marketing strategy, including top-down and bottom-up, PLG, ABM,
              inbound and outbound funnels. We&apos;ll help with storytelling,
              messaging, content, PR and social media management, to increase
              brand awareness, engagement, and differentiation. All in-house, in
              the comfort of your own office.
            </p>
            <p className='align-middle'>
              Don&apos;t let marketing hold you back any longer. Contact us for
              comprehensive marketing support, starting today. That&apos;s how
              you build an empire 💪
            </p>
          </div>
        )}
        {isShowSM ? <HeroSM showMessage={true} /> : null}
      </Container>
    </header>
  );
};

export default Hero;
