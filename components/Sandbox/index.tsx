// components/Sandbox/index.tsx
// Kristian F Jones <me@kristianjones.xyz>
// May 24, 2019
import { ChangeEvent, useState, FunctionComponent } from 'react';

// Styles
import { Typography } from '@rmwc/typography';
import { Select } from '@rmwc/select';
import { Button } from '@rmwc/button';

// CSS
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/button/dist/mdc.button.min.css';

export const Sandbox: FunctionComponent<{}> = () => {
  const [err, setErr] = useState<string>();
  const [data] = useState<string>();
  const [func, setFunc] = useState<string>('');

  const [Stream, setStream] = useState<MediaStream>();

  const ScreenTest = async () => {
    if (Stream) {
      let tracks = Stream.getTracks();

      tracks.forEach(track => track.stop());
      await setStream(undefined);
      return;
    }
    const videoPlayer = document.getElementById('video-player') as HTMLMediaElement; // this is a <video> element
    if (!videoPlayer) return;
    const onSuccessWithSrcObject = (stream: MediaStream) => {
      videoPlayer.srcObject = stream;
    };

    const onSuccessWithSrc = (stream: MediaStream) => {
      videoPlayer.src = window.URL.createObjectURL(stream);
    };

    const Media: MediaStreamConstraints = {
      audio: true,
      video: {
        width: 300,
        height: 300
      }
    };

    if (!navigator.mediaDevices) {
      await setErr('Screen Capture not Possible on this device');
      return;
    }
    // @ts-ignore
    const stream: MediaStream = await navigator.mediaDevices.getDisplayMedia(Media);
    await setStream(stream);
    if ('srcObject' in videoPlayer) {
      onSuccessWithSrcObject(stream);
    } else {
      onSuccessWithSrc(stream);
    }
  };

  const Functions: { [key: string]: () => Promise<any> } = {
    'Screen Test': ScreenTest
  };

  return (
    <>
      <Typography use='headline4'>Sandbox</Typography>
      {err && (
        <Typography style={{ color: 'red' }} use='body1'>
          {err}
        </Typography>
      )}
      <Select
        options={Object.entries(Functions).map(a => a[0])}
        value={func}
        outlined
        onChange={(a: ChangeEvent<HTMLSelectElement>) => setFunc(a.target.value)}
      />
      <br />
      {data && (
        <>
          <Typography use='body1'>{data}</Typography>
          <br />
        </>
      )}
      <video
        style={{ height: '300px', width: '300px', display: !Stream ? 'none' : 'inherit' }}
        id='video-player'
        autoPlay={true}
      />

      <Button raised onClick={Functions[func]}>
        Test Stuff
      </Button>
    </>
  );
};
