export class PoliticalParty {
  id?: string;
  name: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(partial: Partial<PoliticalParty>) {
    Object.assign(this, partial);
  }
}
