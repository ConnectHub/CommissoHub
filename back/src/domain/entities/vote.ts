export class Vote {
  id?: string;
  candidateId: string;
  name?: string;
  cpf?: string;

  cep?: string;
  latitude: string;
  longitude: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(partial: Partial<Vote>) {
    Object.assign(this, partial);
  }
}
