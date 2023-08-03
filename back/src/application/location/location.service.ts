import { OnEvent } from '@nestjs/event-emitter';
import { VoteService } from '../vote/vote.service';
import { Vote } from 'src/domain/entities/vote';
import { Injectable, Logger } from '@nestjs/common';
import { MapLocationServiceInterface } from 'src/domain/entities/map-location-service';

@Injectable()
export class LocationService {
  private readonly logger = new Logger(VoteService.name);
  constructor(
    private readonly voteService: VoteService,
    private readonly mapLocationService: MapLocationServiceInterface,
  ) {}
  @OnEvent('vote')
  async updateLatLong(vote: Vote): Promise<void> {
    this.logger.log(`Updating lat long for vote ${vote.id}`);
    const { lat, long, municipality } =
      await this.mapLocationService.getMapLocation(vote.cep);
    await this.voteService.updateLatLong(vote.id, lat, long, municipality);
  }
}
