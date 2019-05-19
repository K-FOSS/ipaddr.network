import { CSSProperties, FunctionComponent, useState, useEffect } from 'react';
import Head from 'next/head';

import { Toolbar, ToolbarTitle, ToolbarRow, ToolbarMenuIcon } from '@rmwc/toolbar';
import { Elevation } from '@rmwc/elevation';
import { DrawerAppContent } from '@rmwc/drawer';

import { NavBar } from './NavBar';

// CSS
import '@material/toolbar/dist/mdc.toolbar.min.css';
import '@material/drawer/dist/mdc.drawer.min.css';
import '@material/list/dist/mdc.list.min.css';
import '@rmwc/list/collapsible-list.css';
import '@material/elevation/dist/mdc.elevation.min.css';
import '@rmwc/icon/icon.css';

const divStyleing: CSSProperties = {
  background: '#fafafa',
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '320px',
  borderRadius: '1em',
  padding: '1em'
} as CSSProperties;

const MainStyle: CSSProperties = {
  flex: '1 1 auto',
  height: '95%',
  maxWidth: '100%',
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  willChange: 'margin-left'
};

const AppStyle: CSSProperties = {
  position: 'fixed',
  height: '100%',
  minWidth: '100%'
};

export const Layout: FunctionComponent = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  let [isMobileState, setIsMobileState] = useState(true);
  useEffect(() => {
    window.addEventListener('resize', () => doSizeCheck());
    doSizeCheck(false);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => doSizeCheck());
    doSizeCheck(false);
  }, [typeof window !== 'undefined' && window.innerWidth]);

  const doSizeCheck = (initial?: boolean) => {
    const isMobile = window.innerWidth < 640;
    const menuIsOpen = initial && window.innerWidth > 640 ? true : menuOpen;

    if (isMobileState !== isMobile || menuOpen !== menuIsOpen) {
      setMenuOpen(menuIsOpen);
      setIsMobileState(isMobile);
    }
  };

  return (
    <>
      <Toolbar>
        <ToolbarRow>
          <ToolbarMenuIcon icon='menu' onClick={() => setMenuOpen(!menuOpen)} />
          <ToolbarTitle>IP Addr</ToolbarTitle>
        </ToolbarRow>
      </Toolbar>
      <Head>
        <link rel='manifest' href='/static/manifest.json' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
        <meta name='theme-color' content='#6200ee' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        <title>IP Addr Network</title>
      </Head>
      <div style={AppStyle}>
        <NavBar open={menuOpen} dismissible={!isMobileState} modal={isMobileState} />
        <DrawerAppContent style={MainStyle}>
          <Elevation style={divStyleing} z='8'>
            {children}
          </Elevation>
        </DrawerAppContent>
      </div>
    </>
  );
};
