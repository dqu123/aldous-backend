import * as _ from 'lodash';
import { getManager, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

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
  const entityManager = await getManager();
  const newAccessToken = new AccessToken(accessToken);
  await entityManager.save(newAccessToken)
  return newAccessToken;
}
