import build from 'next/dist/build';

import config from './server/config';
import { resolve } from 'path';

const BuildServer = async () => build(resolve('./'), config);
BuildServer();
