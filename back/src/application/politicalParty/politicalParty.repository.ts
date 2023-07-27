import { Injectable } from '@nestjs/common';
import { PoliticalParty } from 'src/domain/entities/politicalParty';
import { PoliticalPartyRepositoryInterface } from 'src/domain/repositories/politicalParty';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class PoliticalPartyRepository
  implements PoliticalPartyRepositoryInterface
{
  constructor(private readonly prisma: PrismaService) {}

  async create(politicalParty: PoliticalParty): Promise<PoliticalParty> {
    return await this.prisma.politicalParty.create({
      data: politicalParty,
    });
  }
}
