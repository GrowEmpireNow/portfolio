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
              Empire Now is a CMO as a Service and{' '}
              <a
                className='underline text-rose-100/90 transition hover:text-rose-100'
                target='_blank'
                rel='noreferrer'
                href='bit.ly/mktghotline'>
                Marketing Hotline
              </a>{' '}
              That&apos;s why we offer CMO as a Service - to help you every step
              of the way. Whether it&apos;s a connection to an in-house
              marketer, or just a phone call to a trusted professional.
            </p>
            <p className='align-middle'>
              Our team of experienced professionals is skilled in top-down,
              bottom-up, inbound, and outbound marketing strategies to help you
              reach your target audience and achieve your business goals.
            </p>
            <p className='align-middle'>
              Our data-first approach means that we use data to guide all of our
              efforts, from advertising and demand generation to lead
              generation, sales, and upsell enablement. We will work with you to
              develop a storytelling and messaging strategy that resonates with
              your audience and establishes your brand as a thought leader in
              your industry. We can also help you create content, build content
              partnerships, manage your PR and social media, and develop product
              marketing plans.
            </p>
            <p className='align-middle'>
              Our ultimate goal is to increase brand awareness and engagement
              for you, educate the market about your brand, differentiate you
              from your competitors, and build a strong community around your
              company. We&apos;ll help you hire top talent, and also focus on HR
              branding - to ensure that your company attracts best of class team
              members.
            </p>
            <p className='align-middle'>
              Don&apos;t wait any longer to take your marketing to the next
              level. Contact us today to learn more about how we can help you
              succeed. That&apos;s how empires are built!  💪
            </p>
          </div>
        )}
        {isShowSM ? <HeroSM showMessage={true} /> : null}
      </Container>
    </header>
  );
};

export default Hero;
