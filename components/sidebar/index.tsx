import LogOutButton from './logout-button';
import SidebarLogo from './sidebar-logo';
import SidebarMenu from './sidebar-menu';
import TweetButton from './tweet-button';

export default function Sidebar() {
  return (
    <aside className='col-span-1 h-full pr-4 pt-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-6 lg:w-56'>
          <SidebarLogo />
          <SidebarMenu />
          <LogOutButton />
          <TweetButton />
        </div>
      </div>
    </aside>
  );
}
