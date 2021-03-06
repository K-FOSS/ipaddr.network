// components/Layout/NavBar/index.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import { List, ListItem, CollapsibleList, SimpleListItem } from '@rmwc/list';
import { DrawerContent, Drawer, DrawerProps } from '@rmwc/drawer';
import Link from 'next/link';

import { MenuItemList } from './Items';

interface MenuItemProps {
  url: string;
  label: string;
  as: string;
  mode?: string;
  currentMode?: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  url,
  label,
  as,
  mode,
  currentMode,
}) => (
  <Link href={url} as={as} prefetch passHref>
    <ListItem
      activated={
        typeof window === 'undefined'
          ? false
          : window.location.pathname.split('/').pop() === as.split('/').pop() &&
            (currentMode ? currentMode == mode : true)
      }
    >
      <span>{label}</span>
    </ListItem>
  </Link>
);

interface NavBarProps extends DrawerProps {
  currentMode?: string;
}

export const NavBar: React.SFC<NavBarProps> = ({ currentMode, ...props }) => (
  <>
    <Drawer dismissible {...props}>
      <DrawerContent>
        <List>
          {MenuItemList.map((ITM) =>
            'children' in ITM ? (
              <CollapsibleList
                key={ITM.label}
                handle={
                  <SimpleListItem text={ITM.label} metaIcon="chevron_right" />
                }
              >
                {ITM.children.map((props) => (
                  <MenuItem
                    currentMode={currentMode}
                    key={props.label}
                    {...props}
                  />
                ))}
              </CollapsibleList>
            ) : (
              <MenuItem currentMode={currentMode} key={ITM.label} {...ITM} />
            ),
          )}
        </List>
      </DrawerContent>
    </Drawer>
  </>
);
