'use client';

import { LogOut } from 'lucide-react';

import { Button } from '../ui/button';

export default function LogOutButton() {
  const handleLogout = () => {};

  return (
    <>
      <Button
        className='hidden w-full justify-start gap-4 lg:flex'
        variant='ghost'
        size='lg'
        onClick={handleLogout}
      >
        <LogOut className='mr-2 size-6' />
        <span className='hidden text-base lg:block'>Log Out</span>
      </Button>
      <Button
        className='gap-4 lg:hidden'
        variant='ghost'
        size='sm'
        onClick={handleLogout}
      >
        <LogOut className='size-7' />
      </Button>
    </>
  );
}
