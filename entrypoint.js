const { createServer } = require('http');
const { parse } = require('url');
const { join } = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const StartServer = async () => {
  const port = 80
  await app.prepare();
  const server = createServer(Handler) 
  server.listen(port, err => err ? console.error(`Error: ${err}`) : console.log(`> Server Started on Port ${port}`))

}

StartServer();


/**
 * 
 * @param {import('http').IncomingMessage} req 
 * @param {import('http').ServerResponse} res 
 */
const Handler = (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // If /service-worker.js load from .next static files
  if (pathname === '/service-worker.js') {
    const filePath = join(__dirname, '.next', pathname);
    app.serveStatic(req, res, filePath);
  }
  // Else if legacy /ipcalc then redirect to root
  else if (pathname === '/ipcalc') {
    res.writeHead(302, { Location: '/' });
    res.end();
  } else handle(req, res, parsedUrl); // All other paths are left to NextJS to deal with

} 