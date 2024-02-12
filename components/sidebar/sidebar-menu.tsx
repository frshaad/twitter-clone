import { sidebar_items } from './sidebar.constant';
import SidebarMenuItem from './sidebar-menu-item';

export default function SidebarMenu() {
  return (
    <div>
      {sidebar_items.map((item) => (
        <SidebarMenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
