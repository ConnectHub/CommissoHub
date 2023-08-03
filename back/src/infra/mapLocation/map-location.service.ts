import { Location } from 'src/domain/entities/location';
import { MapLocationServiceInterface } from 'src/domain/entities/map-location-service';
import { Location as AwsLocation } from 'aws-sdk';
import { Logger } from '@nestjs/common';

export class AwsMapLocationService implements MapLocationServiceInterface {
  private readonly logger = new Logger(AwsMapLocationService.name);
  async getMapLocation(cep: string): Promise<Location> {
    this.logger.log(`Getting map location for cep ${cep}`);
    const location = await new AwsLocation({
      region: 'us-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })
      .searchPlaceIndexForText({
        IndexName: 'explore.place.Esri',
        Text: cep,
      })
      .promise();
    return {
      lat: location.Results[0].Place.Geometry.Point[1],
      long: location.Results[0].Place.Geometry.Point[0],
      municipality: location.Results[0].Place.Municipality,
    };
  }
}
