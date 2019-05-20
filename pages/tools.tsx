// pages/tools.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 19, 2019
import { useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';

import SubnetInfo from '../components/SubnetInfo';
import HelloWorld from '../components/HelloWorld';

type ToolModes = 'SUBNETINFO' | 'HELLOWORLD';

const Modes: { [T in ToolModes]: JSX.Element } = { SUBNETINFO: <SubnetInfo />, HELLOWORLD: <HelloWorld /> };

const ToolsPage: NextPage<{ initialmode: ToolModes }> = ({ initialmode }) => {
  const [mode] = useState<ToolModes>(initialmode);
  return <Layout>{Modes[mode]}</Layout>;
};

ToolsPage.getInitialProps = async ctx => {
  let mode: ToolModes;
  if (ctx.query['mode']) mode = ctx.query['mode'] as ToolModes;
  else mode = 'SUBNETINFO';
  return { initialmode: mode };
};

export default ToolsPage;
