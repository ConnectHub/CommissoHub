import { Location } from './location';

export abstract class MapLocationServiceInterface {
  abstract getMapLocation(cep: string): Promise<Location>;
}
