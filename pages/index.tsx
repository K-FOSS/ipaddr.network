import { CSSProperties } from 'react';
import { NextPage } from 'next';
import publicIP from 'public-ip';

import { Typography } from '@rmwc/typography';

import { Layout } from '../components/Layout';

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
  ip:
    ctx.req && ctx.req.headers['x-forwarded-for'] ? (ctx.req.headers['x-forwarded-for'] as string) : await publicIP.v4()
});

export default IndexPage;

interface ItemProps {
  label: string;
  value: string;
}

const LabelItem: React.SFC<ItemProps> = ({ label, value }) => (
  <Typography use='body1'>
    <label style={{ fontWeight: 'bold' }}>{label}: </label>
    {value}
  </Typography>
);
