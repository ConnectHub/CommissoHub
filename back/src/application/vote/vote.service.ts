import { Injectable, Logger } from '@nestjs/common';
import { Vote } from 'src/domain/entities/vote';
import { VoteRepositoryInterface } from 'src/domain/repositories/vote';
import { CandidateService } from '../user/candidate.service';
import { UserIsNotCandidate } from './errors/user-is-not-candidate';
import { UserAlreadyVoted } from './errors/user-already-voted';

@Injectable()
export class VoteService {
  private readonly logger = new Logger(VoteService.name);
  constructor(
    private readonly voteRepositoryInterface: VoteRepositoryInterface,
    private readonly candidateService: CandidateService,
  ) {}

  async vote(voteDto: Vote): Promise<void> {
    this.logger.log(`Voting for candidate ${voteDto.candidateId}`);
    const [isCandidate, alreadyVoted] = await Promise.all([
      this.candidateService.isCandidate(voteDto.candidateId),
      this.alreadyVoted(voteDto.cpf),
    ]);
    if (!isCandidate) throw new UserIsNotCandidate();
    if (alreadyVoted) throw new UserAlreadyVoted();
    await this.voteRepositoryInterface.vote(voteDto);
  }

  private async alreadyVoted(cpf: string): Promise<boolean> {
    return await this.voteRepositoryInterface.alreadyVoted(cpf);
  }
}
