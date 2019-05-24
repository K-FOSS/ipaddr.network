// components/Layout/NavBar/items.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
type SingleMenuItemT = {
  label: string;
  url: string;
  as: string;
  mode?: string;
};

type MenuWithSubSectionsT = {
  label: string;
  children: SingleMenuItemT[];
};

type MenuItemT = SingleMenuItemT | MenuWithSubSectionsT;

export const MenuItemList: MenuItemT[] = [
  { label: 'My IP', url: '/', as: '/' },
  {
    label: 'Tools',
    children: [{ label: 'Subnet Information', url: '/tools?MODE=SUBNETINFO', as: '/tools', mode: 'SUBNETINFO' }]
  },
  { label: 'Credits', url: '/credit', as: '/credit' },
];
