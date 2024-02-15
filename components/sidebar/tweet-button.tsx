import { SquarePen } from 'lucide-react';

import { Button } from '../ui/button';

export default function TweetButton() {
  return (
    <>
      <Button
        className='hidden w-full justify-start gap-4 bg-sky-500 hover:bg-sky-500/80 lg:flex'
        size='lg'
      >
        <SquarePen className='mr-2 size-6' />{' '}
        <span className='hidden text-base lg:block'>Tweet</span>
      </Button>
      <Button
        className='gap-4 bg-sky-500 hover:bg-sky-500/80 lg:hidden'
        size='sm'
      >
        <SquarePen className='size-7' />
      </Button>
    </>
  );
}
