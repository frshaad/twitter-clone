import LogOutButton from './logout-button';
import SidebarLogo from './sidebar-logo';
import SidebarMenu from './sidebar-menu';
import TweetButton from './tweet-button';

export default function Sidebar() {
  return (
    <aside className='h-full w-min px-3 pt-4 lg:flex lg:flex-1 lg:justify-end lg:pl-0 lg:pr-6'>
      <div className='flex max-w-56 flex-col items-center space-y-8 lg:items-start'>
        <SidebarLogo />
        <SidebarMenu />
        <LogOutButton />
        <TweetButton />
      </div>
    </aside>
  );
}
