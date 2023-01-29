import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = (props) => {
  return (
    <div className='container max-w-2xl mx-auto relative z-20'>
      {props.children}
    </div>
  );
};

export default Container;
