import { FC } from 'react';
import Link from 'next/link';

import { MdKeyboardBackspace } from 'react-icons/md';
import Container from '@/components/Container';

type BackButtonProps = {};

const BackButton: FC<BackButtonProps> = ({}) => {
  return (
    <Container>
      <div className='flex items-start'>
        <Link href='/' className='flex items-center mb-4 space-x-1 text-sm'>
          <MdKeyboardBackspace />
          <span>Back</span>
        </Link>
      </div>
    </Container>
  );
};

export default BackButton;
