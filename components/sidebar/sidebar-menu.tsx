import { sidebar_items } from './sidebar.constant';
import SidebarMenuItem from './sidebar-menu-item';

export default function SidebarMenu() {
  return (
    <div className='space-y-5 max-md:flex max-md:flex-col max-md:items-center lg:space-y-1'>
      {sidebar_items.map((item) => (
        <SidebarMenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
