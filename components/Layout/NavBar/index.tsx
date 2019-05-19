

import { List, ListItem, CollapsibleList, SimpleListItem } from '@rmwc/list';
import { DrawerContent, Drawer, DrawerProps } from '@rmwc/drawer';
import Link from 'next/link'

import { MenuItemList } from './Items'

interface MenuItemProps {
  url: string;
  label: string
  as: string
}

const MenuItem: React.SFC<MenuItemProps> = ({ url, label, as }) => (
	<Link href={url} as={as}>
  <ListItem
		activated={typeof window === 'undefined' ? false :  window.location.pathname.split('/').pop() === as.split('/').pop()}
	>
		<span>{label}</span>
	</ListItem>
  </Link>
)

interface NavBarProps extends DrawerProps {}

export const NavBar: React.SFC<NavBarProps>= ({ ...props}) => (
  <>
    <Drawer dismissible {...props}>
      <DrawerContent>
				<List>
          {MenuItemList.map((ITM) => ('children' in ITM) ? (
            <CollapsibleList
            key={ITM.label}
            handle={<SimpleListItem text={ITM.label} metaIcon='chevron_right'/>}
            startOpen={typeof window === 'undefined' ? true : (ITM.children.some(l => window.location.pathname.split('/').pop() === l.as.split('/').pop()))}
          >
          {ITM.children.map(props => (<MenuItem key={props.label} {...props}/>))}
          </CollapsibleList>) : <MenuItem key={ITM.label} {...ITM} />)}
        </List>
      </DrawerContent>

    </Drawer>
  </>

)
 