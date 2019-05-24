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

type Credit = {
  authorName: string;
  authorLink: string;
  thanksText: string;
  library?: string;
  libraryLink?: string;
};

const credits: Credit[] = [
  {
    authorName: 'Next.JS',
    authorLink: 'https://github.com/zeit/next.js/',
    thanksText: 'for the amazing SSR Framework'
  },
  {
    authorName: 'Freepik',
    authorLink:
      'https://www.freepik.com/?__hstc=57440181.4bf38f76266d29ad90267761774ab1eb.1558299770962.1558299770962.1558708989234.2&__hssc=57440181.4.1558708989234&__hsfp=2849006003',
    thanksText: 'for the amazing icon from',
    library: 'flaticon',
    libraryLink: 'https://www.flaticon.com'
  },
  {
    authorName: 'jamesmfriedman',
    authorLink: 'https://github.com/jamesmfriedman',
    thanksText: 'for the amazing',
    library: 'RMWC',
    libraryLink: 'https://github.com/jamesmfriedman/rmwc'
  },
  {
    authorName: 'sindresorhus',
    authorLink: 'https://github.com/sindresorhus',
    thanksText: 'for the amazing',
    library: 'public-ip',
    libraryLink: 'https://github.com/sindresorhus/public-ip'
  },
  {
    authorName: 'hg8496',
    authorLink: 'https://github.com/hg8496',
    thanksText: 'for the amazing',
    library: 'netmask',
    libraryLink: 'https://www.npmjs.com/package/@hg8496/netmask'
  }
];

const CreditsPage: NextPage = () => (
  <Layout type='FORM'>
    <Typography use='headline4'>Credits</Typography>
    <br />
    {credits.map(props => (
      <CreditsItem key={props.authorName} {...props} />
    ))}
  </Layout>
);

type CreditItemProps = {
  authorName: string;
  authorLink: string;
  thanksText: string;
  library?: string;
  libraryLink?: string;
};

const CreditsItem: React.FunctionComponent<CreditItemProps> = ({ authorLink, authorName, thanksText, ...props }) => (
  <Typography use='body1'>
    <a href={authorLink}>{authorName}</a>&nbsp;{thanksText}
    {props.library && props.libraryLink && (
      <>
        &nbsp;<a href={props.libraryLink}>{props.library}</a>
      </>
    )}
  </Typography>
);

export default CreditsPage;
