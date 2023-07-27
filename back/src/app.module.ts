import { Module } from '@nestjs/common';
import { CandidateModule } from './application/user/candidate.module';
import { VoteModule } from './application/vote/vote.module';
import { PoliticalPartyModule } from './application/politicalParty/politicalParty.module';

@Module({
  imports: [CandidateModule, VoteModule, PoliticalPartyModule],
})
export class AppModule {}
