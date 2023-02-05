import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = (props) => {
  return (
    <div className='container w-full max-w-[640px] mx-auto relative z-20'>
      {props.children}
    </div>
  );
};

export default Container;
