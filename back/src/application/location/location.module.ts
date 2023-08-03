import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { VoteModule } from '../vote/vote.module';
import { MapLocationModule } from 'src/infra/mapLocation/map-location.module';

@Module({
  imports: [VoteModule, MapLocationModule],
  providers: [LocationService],
})
export class LocationModule {}
