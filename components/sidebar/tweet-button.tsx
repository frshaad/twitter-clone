import { SquarePen } from 'lucide-react';

import { Button } from '../ui/button';

export default function TweetButton() {
  return (
    <Button
      className='w-full justify-start gap-4 bg-sky-500 hover:bg-sky-500/80'
      size='lg'
    >
      <SquarePen className='mr-2 size-6' />{' '}
      <span className='hidden text-base lg:block'>Tweet</span>
    </Button>
  );
}
