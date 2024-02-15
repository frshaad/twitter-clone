import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { SidebarItem } from './sidebar.constant';

type Props = {
  item: SidebarItem;
};

export default function SidebarMenuItem({ item }: Props) {
  const { href, icon: Icon, label } = item;

  return (
    <>
      <Button
        className='hidden w-full justify-start gap-4 lg:flex'
        variant='ghost'
        size='lg'
        asChild
      >
        <Link href={href}>
          <Icon className='mr-2 size-6 lg:m-0' />{' '}
          <span className='text-base'>{label}</span>
        </Link>
      </Button>
      <Button className='gap-4 lg:hidden' variant='ghost' size='sm' asChild>
        <Link href={href}>
          <Icon className='size-7' />
        </Link>
      </Button>
    </>
  );
}
