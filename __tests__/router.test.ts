import { initializeApp } from '../src/router';

describe('initializeApp', () => {
  it('initializes app', async () => {
    const app = initializeApp();
    expect(app).toBeDefined();
  });
});
