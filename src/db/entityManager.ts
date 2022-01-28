import { getManager, EntityManager } from 'typeorm';
import { env } from 'process';

export function getEntityManager(): EntityManager {
  const connectionName = env.ENV === 'test' ? 'test' : 'default';
  return getManager(connectionName);
}
