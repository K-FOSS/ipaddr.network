// pages/tools.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 19, 2019
import { useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';

import SubnetInfo from '../components/SubnetInfo';

type ToolModes = 'SUBNETINFO';

const Modes: { [T in ToolModes]: JSX.Element } = { SUBNETINFO: <SubnetInfo /> };

const ToolsPage: NextPage<{ initialmode: ToolModes }> = ({ initialmode }) => {
  const [mode] = useState<ToolModes>(initialmode);
  return (
    <Layout type="FORM" currentMode={mode as string}>
      {Modes[mode]}
    </Layout>
  );
};

ToolsPage.getInitialProps = async (ctx) => {
  let mode: ToolModes;
  if (ctx.query['mode']) mode = ctx.query['mode'] as ToolModes;
  else mode = 'SUBNETINFO';
  return { initialmode: mode };
};

export default ToolsPage;
