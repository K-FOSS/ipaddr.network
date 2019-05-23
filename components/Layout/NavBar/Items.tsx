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
  }
];
