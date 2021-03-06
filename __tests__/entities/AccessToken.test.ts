import * as uuid from 'uuid';
import { getManager, createConnection } from 'typeorm';
import { AccessToken, createAccessToken } from '../../src/entities/AccessToken';

const EXAMPLE_HOST_NAME = 'https://example-api.com';
const NOW = new Date();
const TOKEN_EXPIRATION_DATE = new Date(NOW.getTime() + 60 * 60 * 1000);
const TOKEN_VALUE = uuid.v4();

describe('AccessToken', () => {
  beforeEach(() => {
    return createConnection({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [AccessToken],
        synchronize: true,
        logging: false
    });
  });

  describe('createAccessToken', () => {
    it('saves AccessToken, explicitly setting all fields', async () => {
      const entityManager = await getManager();
      const existing = await entityManager.find(AccessToken);
      expect(existing.length).toBe(0);
      const newAccessToken = await createAccessToken({
        hostName: EXAMPLE_HOST_NAME,
        endpoint: '/',
        method: 'GET',
        createdAt: NOW,
        expiresAt: TOKEN_EXPIRATION_DATE,
        value: TOKEN_VALUE,
      });
      await entityManager.save(newAccessToken)
      const accessTokens = await entityManager.find(AccessToken);
      expect(accessTokens.length).toBe(1);
      expect(accessTokens[0].hostName).toBe(EXAMPLE_HOST_NAME);
      expect(accessTokens[0].createdAt).toStrictEqual(NOW);
    });
  });
});
