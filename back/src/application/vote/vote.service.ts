import { Injectable, Logger } from '@nestjs/common';
import { Vote } from 'src/domain/entities/vote';
import { VoteRepositoryInterface } from 'src/domain/repositories/vote';
import { CandidateService } from '../user/candidate.service';
import { UserIsNotCandidate } from './errors/user-is-not-candidate';
import { UserAlreadyVoted } from './errors/user-already-voted';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MapLocationWithVotes } from './interfaces';

@Injectable()
export class VoteService {
  private readonly logger = new Logger(VoteService.name);
  constructor(
    private readonly voteRepositoryInterface: VoteRepositoryInterface,
    private readonly candidateService: CandidateService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async vote(voteDto: Vote): Promise<void> {
    this.logger.log(`Voting for candidate ${voteDto.candidateId}`);
    const [isCandidate, alreadyVoted] = await Promise.all([
      this.candidateService.isCandidate(voteDto.candidateId),
      this.alreadyVoted(voteDto.cpf),
    ]);
    if (!isCandidate) throw new UserIsNotCandidate();
    if (alreadyVoted) throw new UserAlreadyVoted();
    const { id } = await this.voteRepositoryInterface.vote(voteDto);
    this.eventEmitter.emit('vote', {
      cep: voteDto.cep,
      id,
    });
  }

  async getMapLocations(candidateId: string): Promise<MapLocationWithVotes[]> {
    const groupBy = await this.voteRepositoryInterface.getMapLocations(
      candidateId,
    );
    const mapLocations = await Promise.all(
      groupBy.map(async (location) => {
        const { municipality } = location;
        const { lat, long } = await this.voteRepositoryInterface.getLatLong(
          municipality,
        );
        return { lat, long, municipality };
      }),
    );
    const mapLocationsWithVotes = mapLocations.map((location) => {
      const correctLocation = groupBy.find(
        (loc) => loc.municipality === location.municipality,
      );
      const votes = correctLocation ? correctLocation._count.municipality : 0;
      return {
        ...location,
        votes: votes,
      };
    });
    return mapLocationsWithVotes;
  }

  private async alreadyVoted(cpf: string): Promise<boolean> {
    return await this.voteRepositoryInterface.alreadyVoted(cpf);
  }

  async updateLatLong(
    id: string,
    lat: number,
    long: number,
    municipality: string,
  ): Promise<void> {
    await this.voteRepositoryInterface.updateLatLong(
      id,
      lat,
      long,
      municipality,
    );
  }
}
