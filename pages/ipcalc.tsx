// pages/ipcalc.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 19, 2019
import { useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';

import SubnetInfo from '../components/SubnetInfo';

type ToolModes = 'SUBNETINFO';

const Modes: { [T in ToolModes]: JSX.Element } = { SUBNETINFO: <SubnetInfo /> };

const ToolsPage: NextPage<{}> = () => {
  const [mode] = useState<ToolModes>('SUBNETINFO');
  return <Layout>{Modes[mode]}</Layout>;
};

export default ToolsPage;
