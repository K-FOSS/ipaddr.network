import {  } from 'next/link'


type SingleMenuItemT = {
  label: string;
  url: string;
  as: string;
};

type MenuWithSubSectionsT = {
  label: string;
  children: SingleMenuItemT[];
};

type MenuItemT = SingleMenuItemT | MenuWithSubSectionsT;

export const MenuItemList: MenuItemT[] = [
  { label: 'My IP', url: '/', as: ''},
  { label: 'Tools', children: [
    { label: 'Subnet Information', url: '/tools?mode=SUBNETINFO', as: '/tools'}
  ]}
]