import 'dotenv/config';
import next from 'next';
import http from 'http';
import cors from 'cors';
import {ip} from './ip';
import * as fs from 'fs';
import {parse} from 'url';
import helmet from 'helmet';
import * as path from 'path';
import sequelize from '../lib/db/connection';
import {logTemplate} from '../lib/utils/server';
import express, {Express, Request, Response} from 'express';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEPLOYED = process.env.IS_DEPLOYED === 'true';
export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export const TLS_PORT = PORT + 5;

export const checkForTLS = (): {
  hasSupportForTLS: boolean;
  tlsOptions: {key: string | Buffer; cert: string | Buffer};
} => {
  let hasSupportForTLS = false;

  const tlsOptions: {key: string | Buffer; cert: string | Buffer} = {
    key: '',
    cert: ''
  };

  if (IS_DEPLOYED) {
    return {hasSupportForTLS, tlsOptions};
  }

  const keyPath: string = path.join(process.cwd(), 'cert', 'private_key.pem');
  const certPath: string = path.join(process.cwd(), 'cert', 'certificate.pem');

  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    tlsOptions.key = fs.readFileSync(keyPath);
    tlsOptions.cert = fs.readFileSync(certPath);
    hasSupportForTLS = true;
  }

  return {hasSupportForTLS, tlsOptions};
};

const nextExpress = async (expressApp: Express) => {
  const dev = !IS_PRODUCTION;
  const nextApp = next({dev, port: PORT});
  await nextApp.prepare();

  const handle = nextApp.getRequestHandler();

  // @ts-ignore
  expressApp.get('*', async (req: Request, res: Response) => {
    const parsedUrl = parse(req.url, true);
    const {pathname, query} = parsedUrl;
    if (pathname === '/a') {
      await nextApp.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      await nextApp.render(req, res, '/b', query);
    } else {
      await handle(req, res, parsedUrl);
    }
  });

  // allow next to handle all requests
  expressApp.all('*', async (req: Request, res: Response) => {
    return await handle(req, res);
  });
};

export const startServer = async () => {
  // http and express server
  const app = express();
  const httpServer = http.createServer(app);

  const gracefulShutdown = async () => {
    console.log(logTemplate('\nGracefully shutting down server', 'warn')); //NOSONAR
    httpServer.close();
    await sequelize.close();
    process.exit(0);
  };

  // listen for interrupts to gracefully shutdown the server
  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
  process.on('uncaughtException', gracefulShutdown);
  process.on('unhandledRejection', gracefulShutdown);

  const port = parseInt(process.env.PORT ?? '3000') ?? PORT ?? 3000;
  app.set('port', port);
  app.use(helmet());
  app.use(cors());
  app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
  app.use(express.json({limit: '50mb'}));

  // await successful connection to the database
  await sequelize.sync({force: false, logging: false});
  // start the next functionality and bootstrap it to the express server
  await nextExpress(app);

  // start the http server
  await new Promise<void>(resolve =>
    httpServer.listen(port, IS_DEPLOYED ? '0.0.0.0' : 'localhost', resolve)
  );
  console.log(logTemplate(`\n🚀 LocalHost Server ready at http://localhost:${port}\n`)); //NOSONAR

  // if deployed, print the web address and return
  if (IS_DEPLOYED) {
    console.log(logTemplate(`🌎 Deployed Server ready at ${process.env.DEPLOYED_URL}\n`)); //NOSONAR
  } else {
    // check for TLS support, will return false if not supported or deployed - SSL should
    // be handled by the reverse proxy in production and use a valid certificate not one
    // that has been self-signed
    const {hasSupportForTLS, tlsOptions} = checkForTLS();

    if (hasSupportForTLS) {
      const hostIP = ip;
      const https = require('https');
      const httpsServer = https.createServer(tlsOptions, app);
      await new Promise<void>(resolve => httpsServer.listen(TLS_PORT, '0.0.0.0', resolve));
      console.log(logTemplate(`🔒 Local Network Server ready at https://${hostIP}:${TLS_PORT}\n`)); //NOSONAR
    }
  }
};

if (require.main === module) {
  (async () => {
    await startServer().catch(e => {
      const errMessage = '❌ Error starting server for Dependability Tracker:' + ' ' + e;
      console.error(logTemplate(errMessage, 'error')); //NOSONAR
      process.exit(1);
    });
  })();
}
