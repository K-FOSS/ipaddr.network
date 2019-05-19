import { NextPage } from 'next';
import { Typography } from '@rmwc/typography';

import { Layout } from '../components/Layout';

// CSS
import '../style.css';
import '@material/typography/dist/mdc.typography.min.css';


const AboutPage: NextPage<{}> = () => {
  return (
    <Layout>
      <Typography use='headline4'>What is an "IP"</Typography>
      <Typography use="body1">
        An IP Address is kind of like a face for you on the internet. The websites or serverices you use use and IP Address to tell the data your trying to retrieve how to get back to your computer.
        Every device on the internet has an IP Address.
      </Typography>
    </Layout>
  );
};

export default AboutPage;
