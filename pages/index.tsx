// pages/index.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import { CSSProperties } from 'react';
import { NextPage } from 'next';
import publicIP from 'public-ip';

import { Typography } from '@rmwc/typography';

import { Layout } from '../components/Layout';
import { LabelItem } from '../components/LabelItem';

// CSS
import '../style.css';
import '@material/typography/dist/mdc.typography.min.css';

const TextStyle: CSSProperties = {
  fontSize: '2.125rem',
  fontWeight: 400,
  lineHeight: '2.5rem',
  marginBottom: '0.875rem'
};

interface Props {
  ip: string;
}

const IndexPage: NextPage<Props> = ({ ip }) => (
  <Layout type='FORM'>
    <Typography style={TextStyle} use='headline4'>
      IP Address
    </Typography>
    <LabelItem label='Public IP' value={ip} />
  </Layout>
);

IndexPage.getInitialProps = async ctx => ({
  // if Server Side request then return the x-forwarded-for header, else get public IP and return that
  ip:
    ctx.req && ctx.req.headers['x-forwarded-for'] ? (ctx.req.headers['x-forwarded-for'] as string) : await publicIP.v4()
});

export default IndexPage;
