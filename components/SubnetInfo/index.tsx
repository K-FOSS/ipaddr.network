// components/SubnetInfo/index.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import { useState, ChangeEvent, FunctionComponent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Typography } from '@rmwc/typography';
import { TextField } from '@rmwc/textfield';

import { Netmask } from '@hg8496/netmask';

import { masks } from './masks';
import { LabelItem } from '../LabelItem';

// CSS
import '../../style.css';
import '@material/typography/dist/mdc.typography.min.css';
import '@material/button/dist/mdc.button.min.css';
import '@material/textfield/dist/mdc.textfield.min.css';
import '@material/floating-label/dist/mdc.floating-label.min.css';
import '@material/notched-outline/dist/mdc.notched-outline.min.css';
import '@material/line-ripple/dist/mdc.line-ripple.min.css';
import '@material/button/dist/mdc.button.min.css';

const SubNetInfo: FunctionComponent<{}> = () => {
  const [subnet, setSubNet] = useState<Netmask>();

  const [debouncedCallback] = useDebouncedCallback(
    (value) => calculateNetwork(value),
    500,
  );

  const calculateNetwork = async (ipaddr: string) =>
    setSubNet(new Netmask(ipaddr));

  return (
    <>
      <Typography use="headline4">Subnet Information</Typography>
      <br />

      <TextField
        outlined
        label="IP Address"
        onChange={async (a: ChangeEvent<HTMLInputElement>) =>
          debouncedCallback(a.target.value)
        }
      />
      {subnet && (
        <>
          <br />

          <LabelItem label="Network" value={subnet.toString()} />
          <LabelItem label="Subnet Mask" value={subnet.netmask} />
          <LabelItem label="Wildcard" value={subnet.hostmask} />
          <br />

          <LabelItem label="Address" value={subnet.network} />

          <LabelItem label="Broadcast" value={subnet.broadcastIP} />
          <br />

          <LabelItem label="Usable Hosts" value={masks[subnet.netmaskBits]} />
          <LabelItem label="Min" value={subnet.firstHostIP} />
          <LabelItem label="Max" value={subnet.lastHostIP} />
          <br />
        </>
      )}
    </>
  );
};

export default SubNetInfo;
