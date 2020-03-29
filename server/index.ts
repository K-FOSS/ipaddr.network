import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { join } from 'path';
import conf from './config';
import next from 'next';

const app = next({
  conf: conf,
});
const handle = app.getRequestHandler();

const StartServer = async () => {
  const port = 80;
  await app.prepare();
  const server = createServer(Handler);
  server.listen(port, () => console.log(`> Server Started on Port ${port}`));
};

StartServer();

const Handler = (req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true);
  const { pathname } = parsedUrl;

  // If /service-worker.js load from .next static files
  if (pathname === '/service-worker.js') {
    const filePath = join('.next', pathname);
    app.serveStatic(req, res, filePath);
  }
  // Else if legacy /ipcalc then redirect to root
  else if (pathname === '/ipcalc') {
    res.writeHead(302, { Location: '/' });
    res.end();
  } else handle(req, res, parsedUrl); // All other paths are left to NextJS to deal with
};
