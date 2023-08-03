import { Location } from '../entities/location';
import { Vote } from '../entities/vote';

export abstract class VoteRepositoryInterface {
  vote: (vote: Vote) => Promise<Vote>;
  alreadyVoted: (cpf: string) => Promise<boolean>;
  updateLatLong: (
    id: string,
    lat: number,
    long: number,
    municipality: string,
  ) => Promise<void>;
  getMapLocations: (candidateId: string) => Promise<
    {
      municipality: string;
      _count: {
        municipality: number;
      };
    }[]
  >;
  getLatLong: (municipality: string) => Promise<Location>;
}
