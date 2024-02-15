import './globals.css';

import type { Metadata } from 'next';

import FollowBar from '@/components/followbar';
import Sidebar from '@/components/sidebar';
import { inter } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Twitter clone created by Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='h-screen bg-black text-white'>
          <div className='mx-auto flex h-full max-w-6xl md:container'>
            <Sidebar />
            <main className='w-full border-l border-neutral-800 lg:flex-[2] lg:border-x'>
              {children}
            </main>
            <FollowBar />
          </div>
        </div>
      </body>
    </html>
  );
}
