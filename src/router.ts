import * as express from 'express';

export function initializeApp(): express.Application {
  const app = express();
  return app;
}
