import { Injectable } from '@nestjs/common';
import { PoliticalParty } from 'src/domain/entities/politicalParty';
import { PoliticalPartyRepositoryInterface } from 'src/domain/repositories/politicalParty';

@Injectable()
export class PoliticalPartyService {
  constructor(
    private readonly politicalPartyRepository: PoliticalPartyRepositoryInterface,
  ) {}

  async create(politicalPartyDto: PoliticalParty): Promise<PoliticalParty> {
    const politicalParty = await this.politicalPartyRepository.create(
      politicalPartyDto,
    );
    return new PoliticalParty(politicalParty);
  }
}
