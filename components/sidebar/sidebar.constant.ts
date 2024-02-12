import { Bell, Home, LucideIcon, User } from 'lucide-react';

export type SidebarItem = {
  id: number;
  label: string;
  href: string;
  icon: LucideIcon;
};

export const sidebar_items: SidebarItem[] = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    id: 2,
    label: 'Notifications',
    href: '/notifications',
    icon: Bell,
  },
  {
    id: 3,
    label: 'Profile',
    href: '/users/123',
    icon: User,
  },
];
