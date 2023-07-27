import { Module } from '@nestjs/common';
import { PoliticalPartyRepositoryInterface } from 'src/domain/repositories/politicalParty';
import { PoliticalPartyRepository } from './politicalParty.repository';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { PoliticalPartyService } from './politicalParty.service';
import { PoliticalPartyController } from './politicalParty.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PoliticalPartyController],
  providers: [
    PoliticalPartyService,
    {
      provide: PoliticalPartyRepositoryInterface,
      useClass: PoliticalPartyRepository,
    },
  ],
})
export class PoliticalPartyModule {}
