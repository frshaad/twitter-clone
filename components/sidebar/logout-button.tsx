'use client';

import { LogOut } from 'lucide-react';

import { Button } from '../ui/button';

export default function LogOutButton() {
  const handleLogout = () => {};

  return (
    <Button
      className='w-full justify-start gap-4'
      variant='ghost'
      size='lg'
      onClick={handleLogout}
    >
      <LogOut className='mr-2 size-6' />
      <span className='text-base'>Log Out</span>
    </Button>
  );
}
