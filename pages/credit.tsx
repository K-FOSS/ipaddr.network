// pages/credit.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import React from 'react';
import { NextPage } from 'next';

import { Typography } from '@rmwc/typography';

import { Layout } from '../components/Layout';

// Styles
import '@material/typography/dist/mdc.typography.min.css';
import '@material/button/dist/mdc.button.min.css';


const ErrorPage: NextPage = () => (
  <Layout type='FORM'>
    <Typography use='headline4'>Credit</Typography>
    <br />
    <Typography use="body1"><a href="https://github.com/zeit/next.js/">Next.JS</a> for the amazing SSR Framework</Typography>
    <Typography use="body1"><a href="https://www.freepik.com/?__hstc=57440181.4bf38f76266d29ad90267761774ab1eb.1558299770962.1558299770962.1558708989234.2&__hssc=57440181.4.1558708989234&__hsfp=2849006003">Freepik</a> for the amazing icon from <a href="https://www.flaticon.com" >flaticon</a></Typography>
    <Typography use="body1"><a href="https://github.com/jamesmfriedman">jamesmfriedman</a> for the amazing <a href="https://github.com/jamesmfriedman/rmwc">RMWC</a></Typography>
  </Layout>
);

export default ErrorPage;
