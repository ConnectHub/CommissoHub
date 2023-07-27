import { Candidate } from '../entities/candidate';

export abstract class CandidateRepositoryInterface {
  create: (candidate: Candidate) => Promise<Candidate>;
  findByEmail: (email: string) => Promise<Candidate>;
  findById: (id: string) => Promise<Candidate>;
}
