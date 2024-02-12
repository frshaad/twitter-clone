import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';

export default function SidebarLogo() {
  return (
    <Link
      href='/'
      className='ml-3 flex size-14 items-center justify-center rounded-full p-4 transition hover:bg-blue-300'
    >
      <BsTwitter size={28} />
    </Link>
  );
}
