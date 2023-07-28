import { Vote } from '../entities/vote';

export abstract class VoteRepositoryInterface {
  vote: (vote: Vote) => Promise<void>;
  alreadyVoted: (cpf: string) => Promise<boolean>;
}
