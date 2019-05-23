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

const MenuItem: React.SFC<MenuItemProps> = ({ url, label, as, mode, currentMode }) => (
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
          {MenuItemList.map(ITM =>
            'children' in ITM ? (
              <CollapsibleList
                key={ITM.label}
                handle={<SimpleListItem text={ITM.label} metaIcon='chevron_right' />}
                startOpen={
                  typeof window === 'undefined'
                    ? true
                    : ITM.children.some(l => window.location.pathname.split('/').pop() === l.as.split('/').pop())
                }
              >
                {ITM.children.map(props => (
                  <MenuItem currentMode={currentMode} key={props.label} {...props} />
                ))}
              </CollapsibleList>
            ) : (
              <MenuItem currentMode={currentMode} key={ITM.label} {...ITM} />
            )
          )}
        </List>
      </DrawerContent>
    </Drawer>
  </>
);
