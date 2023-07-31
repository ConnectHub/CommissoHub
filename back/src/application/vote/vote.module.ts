import { Module } from '@nestjs/common';
import { VoteRepositoryInterface } from 'src/domain/repositories/vote';
import { VoteRepository } from './vote.repository';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { CandidateModule } from '../user/candidate.module';

@Module({
  imports: [PrismaModule, CandidateModule],
  controllers: [VoteController],
  providers: [
    VoteService,
    {
      provide: VoteRepositoryInterface,
      useClass: VoteRepository,
    },
  ],
})
export class VoteModule {}
