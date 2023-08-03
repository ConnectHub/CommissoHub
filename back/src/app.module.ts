import { Module } from '@nestjs/common';
import { CandidateModule } from './application/user/candidate.module';
import { VoteModule } from './application/vote/vote.module';
import { PoliticalPartyModule } from './application/politicalParty/politicalParty.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LocationModule } from './application/location/location.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    CandidateModule,
    VoteModule,
    PoliticalPartyModule,
    LocationModule,
  ],
})
export class AppModule {}
