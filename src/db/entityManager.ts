import { getManager, EntityManager } from 'typeorm';
import { env } from 'process';

export async function getEntityManager(): Promise<EntityManager> {
  const connectionName = env.ENV === 'test' ? 'test' : 'default';
  return getManager(connectionName);
}
