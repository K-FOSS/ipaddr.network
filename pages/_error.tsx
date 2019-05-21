import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';

import { Layout } from '../components/Layout';

// Styles
import '@material/typography/dist/mdc.typography.min.css';
import '@material/button/dist/mdc.button.min.css';

interface Props {
  statusCode: number | null | undefined;
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => (
  <Layout type='FORM'>
    <Typography use='headline4'>ERROR</Typography>
    <br />
    <Typography use='body1'>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </Typography>
    <br />
    <Link href='/'>
      <Button raised>Go Home</Button>
    </Link>
  </Layout>
);

ErrorPage.getInitialProps = async ({ res, err }) => ({
  statusCode: res ? res.statusCode : err ? err.statusCode : null
});

export default ErrorPage;
