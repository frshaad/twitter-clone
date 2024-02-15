import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';

export default function SidebarLogo() {
  return (
    <Link
      href='/'
      className='flex size-14 items-center justify-center rounded-full p-4 transition hover:bg-sky-400 lg:ml-[14px]'
    >
      <BsTwitter size={28} />
    </Link>
  );
}
