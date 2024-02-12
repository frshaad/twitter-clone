import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { SidebarItem } from './sidebar.constant';

type Props = {
  item: SidebarItem;
};

export default function SidebarMenuItem({ item }: Props) {
  const { href, icon: Icon, label } = item;

  return (
    <Button
      className='w-full justify-start gap-4'
      variant='ghost'
      size='lg'
      asChild
    >
      <Link href={href}>
        <Icon className='mr-2 size-6' />{' '}
        <span className='text-base'>{label}</span>
      </Link>
    </Button>
  );
}
