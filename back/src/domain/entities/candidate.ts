import { Profile } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class Candidate {
  id?: string;
  name: string;
  email: string;
  politicalPartyId: string;

  profile: Profile;

  @Exclude()
  password: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(partial: Partial<Candidate>) {
    Object.assign(this, partial);
  }
}
