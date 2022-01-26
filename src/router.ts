import * as express from 'express';

export function initializeApp(): express.Application {
  const app = express();
  app.get('/', (_req, res) => res.json({ test: 10, data: '123' }));
  return app;
}
