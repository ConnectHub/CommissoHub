import { PoliticalParty } from '../entities/politicalParty';

export abstract class PoliticalPartyRepositoryInterface {
  create: (politicalParty: PoliticalParty) => Promise<PoliticalParty>;
}
