import { Module } from '@nestjs/common';
import { MapLocationServiceInterface } from 'src/domain/entities/map-location-service';
import { AwsMapLocationService } from './map-location.service';

@Module({
  providers: [
    {
      provide: MapLocationServiceInterface,
      useClass: AwsMapLocationService,
    },
  ],
  exports: [MapLocationServiceInterface],
})
export class MapLocationModule {}
