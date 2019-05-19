import { NextPage } from 'next';
import publicIP from 'public-ip'


import { Typography } from '@rmwc/typography';

import { Layout } from '../components/Layout'

// CSS
import '../style.css';
import '@material/typography/dist/mdc.typography.min.css';

interface Props {
  ip: string;
}

const IndexPage: NextPage<Props> = ({ ip }) => (
  <Layout>
    <Typography use='headline3'>IP Address</Typography>
    <Typography use='body1'>{ip}</Typography>
  </Layout>
);

IndexPage.getInitialProps = async ctx => ({
  ip: ctx.req && ctx.req.headers['x-forwarded-for'] ? (ctx.req.headers['x-forwarded-for'] as string) : await publicIP.v4()
});

export default IndexPage;
