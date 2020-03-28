// pages/about.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import { CSSProperties } from 'react';
import { NextPage } from 'next';
import { Typography } from '@rmwc/typography';

import { Layout } from '../components/Layout';

// CSS
import '../style.css';
import '@material/typography/dist/mdc.typography.min.css';

const TextStyle: CSSProperties = {
  color: 'var(--mdc-theme-primary)',
  fontSize: '2.125rem',
  fontWeight: 400,
  lineHeight: '2.5rem',
  marginBottom: '1.875rem',
};

const AboutPage: NextPage<{}> = () => {
  return (
    <Layout type="INFO">
      <Typography use="headline4" style={TextStyle}>
        What is an "IP"
      </Typography>
      <Typography use="body1">
        An IP Address is kind of like a face for you on the internet. The
        websites or serverices you use use and IP Address to tell the data your
        trying to retrieve how to get back to your computer. Every device on the
        internet has an IP Address. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin tortor elit, egestas ac odio eget, facilisis
        accumsan risus. Sed id augue enim. Sed vehicula tellus ullamcorper dolor
        sollicitudin, id semper tellus aliquam. Nam eleifend justo sem, in
        pretium risus dictum eu. Quisque eu congue odio, vel placerat nunc.
        Maecenas rhoncus nibh quis viverra auctor. Curabitur laoreet blandit
        vulputate. Nulla blandit at ante vel auctor. Nulla at fringilla nibh.
        Etiam a aliquam massa, in sagittis nisi. Aliquam sed cursus eros,
        dapibus facilisis lorem. Curabitur malesuada, sem eu sollicitudin
        feugiat, felis nisl finibus tortor, nec congue nulla purus id ligula.
        Quisque eleifend iaculis sapien, ac maximus metus iaculis a. Vestibulum
        egestas enim tellus, vitae ullamcorper diam tincidunt eget. Duis et
        sodales sem. Praesent diam dui, semper ac lacus eu, finibus ultricies
        eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec elit lorem, gravida et lorem a, congue dapibus felis. Nulla
        imperdiet pulvinar ex, non consequat nunc porta id. Curabitur facilisis
        est ante, efficitur feugiat risus aliquet porta. Donec maximus fringilla
        nulla nec porta. In aliquet nibh iaculis magna elementum iaculis.
        Quisque nisl nunc, euismod vitae dui et, laoreet pulvinar nisl.
        Pellentesque finibus dolor vel ultrices imperdiet. Cras id dapibus
        ligula, id elementum enim. Nunc mi libero, tristique sed arcu non,
        varius scelerisque lectus. In eros tellus, rhoncus a commodo sed,
        pulvinar ut mi. Nunc viverra massa lacus, at sagittis nibh faucibus eu.
        Vestibulum sed ante neque. Maecenas volutpat quis odio eu facilisis.
        Integer aliquam mauris justo, quis venenatis felis porttitor at. Morbi
        et vulputate diam. Duis vel rhoncus nulla. Maecenas laoreet sem nibh,
        non placerat elit volutpat sit amet. Quisque ut elit pellentesque,
        accumsan mauris sit amet, facilisis eros. Etiam posuere purus erat, vel
        imperdiet orci sodales mattis. Suspendisse potenti. Praesent et elit
        posuere, vulputate dui eget, viverra tortor. Phasellus vel ullamcorper
        arcu. Quisque dapibus et massa sit amet euismod. Proin ut arcu ornare
        orci varius pretium. Aliquam feugiat, ligula eget dignissim
        sollicitudin, lacus metus auctor magna, vitae faucibus nulla magna eu
        nibh. Sed tempor molestie velit, a tincidunt leo dapibus eget. Curabitur
        eu tortor aliquet, placerat quam sit amet, cursus nunc. Aliquam ac ex eu
        erat suscipit rutrum. Fusce molestie ex in diam pretium, non congue orci
        ullamcorper. Maecenas feugiat odio in mauris tristique, non eleifend
        enim ullamcorper. Sed turpis diam, sollicitudin ut leo quis, tincidunt
        venenatis enim. Nullam at ligula ac sem bibendum venenatis. Proin sit
        amet ultricies ipsum. Cras est lacus, sollicitudin ut metus eu,
        hendrerit venenatis dui. Vivamus tincidunt fermentum augue, lacinia
        consequat tellus. Morbi eros augue, ornare eget volutpat et, tempus at
        quam. Nam in ante commodo, convallis mi vitae, sodales dui. Nullam sed
        congue metus. Etiam accumsan egestas orci, nec viverra sem hendrerit eu.
        Nulla facilisi. Aenean tincidunt eleifend ante id aliquet. Duis
        tincidunt tincidunt lacus, id rutrum mi venenatis quis. Donec enim ex,
        efficitur nec dignissim in, mollis vel augue. Sed enim massa, ornare at
        mattis nec, aliquam et ex. Phasellus vehicula mi velit, quis lobortis
        tortor dictum eget. Ut vulputate augue in quam aliquet, ac tempus elit
        vestibulum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Curabitur sollicitudin tempor dui, ac
        iaculis felis sollicitudin et. Pellentesque sed lobortis quam.
      </Typography>
    </Layout>
  );
};

export default AboutPage;
