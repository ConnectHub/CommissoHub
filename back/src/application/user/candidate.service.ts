import { Injectable } from '@nestjs/common';
import { Candidate } from 'src/domain/entities/candidate';
import { Hasher } from 'src/domain/entities/hasher';
import { CandidateRepositoryInterface } from 'src/domain/repositories/candidate';
import { CandidateAlreadyExists } from './errors/candidate-already-exists';

@Injectable()
export class CandidateService {
  constructor(
    private readonly candidateRepository: CandidateRepositoryInterface,
    private readonly hasher: Hasher,
  ) {}

  async create(candidateDto: Candidate): Promise<Candidate> {
    const candidateExists = await this.candidateRepository.findByEmail(
      candidateDto.email,
    );
    if (candidateExists) throw new CandidateAlreadyExists();
    candidateDto.password = await this.hasher.hash(candidateDto.password);
    const candidate = await this.candidateRepository.create(candidateDto);
    return new Candidate(candidate);
  }

  async findById(id: string): Promise<Candidate> {
    const candidate = await this.candidateRepository.findById(id);
    return new Candidate(candidate);
  }

  async isCandidate(id: string): Promise<boolean> {
    const candidate = await this.candidateRepository.findById(id);
    return candidate.profile === 'CANDIDATE';
  }
}
