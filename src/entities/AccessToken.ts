import * as _ from 'lodash';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { getEntityManager } from '../db/entityManager';

@Entity()
export class AccessToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  method: string;

  @Column()
  hostName: string;

  @Column()
  endpoint: string;

  @Column()
  createdAt: Date;

  @Column()
  expiresAt: Date;

  @Column()
  value: string;

  constructor(accessToken: Partial<AccessToken>) {
    _.extend(this, { createdAt: new Date() },  accessToken);
  }
}

export async function createAccessToken(accessToken: Partial<AccessToken>): Promise<AccessToken> {
  const entityManager = await getEntityManager();
  const newAccessToken = new AccessToken(accessToken);
  await entityManager.save(newAccessToken)
  return newAccessToken;
}
