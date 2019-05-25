// components/Layout/index.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import { CSSProperties, FunctionComponent, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link'

import { Toolbar, ToolbarTitle, ToolbarRow, ToolbarMenuIcon } from '@rmwc/toolbar';
import { Elevation } from '@rmwc/elevation';
import { DrawerAppContent } from '@rmwc/drawer';

import { NavBar } from './NavBar';

// CSS
import '@material/theme/dist/mdc.theme.min.css';
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
  maxWidth: '325px',
  borderRadius: '1em',
  padding: '1em'
} as CSSProperties;

/* const InfoStyleing: CSSProperties = {
  marginTop: '2vh',
  marginBottom: '7vh',
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '80vw',
  borderRadius: '1em',
  padding: '1em'
} as CSSProperties; */

const MainStyle: CSSProperties = {
  flex: '1 1 auto',
  maxWidth: '100%',
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  willChange: 'margin-left',
  minHeight: '94.396%'
};

const MainStyle2: CSSProperties = {
  flex: '1 1 auto',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  willChange: 'margin-left'
};

const AppStyle: CSSProperties = {
  position: 'fixed',
  height: '100%',
  minWidth: '100%',
  overflow: 'auto'
};

const AppStyle2: CSSProperties = {
  position: 'fixed',
  minHeight: '100%',
  minWidth: '100%',
  overflow: 'auto'
};

const rootStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: '1.5rem',
  margin: '0 auto'
};

interface LayoutProps {
  type: 'FORM' | 'INFO';
  currentMode?: string;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, type, currentMode }) => {
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
          <Link href='/' prefetch><ToolbarTitle>IP Addr</ToolbarTitle></Link>
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
      <div style={type == 'FORM' ? AppStyle : AppStyle2}>
        <NavBar currentMode={currentMode} open={menuOpen} dismissible={!isMobileState} modal={isMobileState} />
        <DrawerAppContent style={type == 'FORM' ? MainStyle : MainStyle2}>
          {type == 'FORM' && (
            <Elevation style={divStyleing} z='8'>
              {children}
            </Elevation>
          )}
          {type == 'INFO' && (
            <div className='hello-world' style={rootStyle}>
              {children}
            </div>
          )}
        </DrawerAppContent>
      </div>
    </>
  );
};
