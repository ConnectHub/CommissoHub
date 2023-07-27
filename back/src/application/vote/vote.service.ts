import { Injectable } from '@nestjs/common';
import { Vote } from 'src/domain/entities/vote';
import { VoteRepositoryInterface } from 'src/domain/repositories/vote';
import { CandidateService } from '../user/candidate.service';
import { UserIsNotCandidate } from './errors/user-is-not-candidate';

@Injectable()
export class VoteService {
  constructor(
    private readonly voteRepositoryInterface: VoteRepositoryInterface,
    private readonly candidateService: CandidateService,
  ) {}

  async vote(voteDto: Vote): Promise<void> {
    const isCandidate = await this.candidateService.isCandidate(
      voteDto.candidateId,
    );
    if (!isCandidate) throw new UserIsNotCandidate();
    await this.voteRepositoryInterface.vote(voteDto);
  }
}
