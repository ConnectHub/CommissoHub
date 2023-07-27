import { Injectable } from '@nestjs/common';
import { Candidate } from 'src/domain/entities/candidate';
import { CandidateRepositoryInterface } from 'src/domain/repositories/candidate';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class CandidateRepository implements CandidateRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async create(candidate: Candidate): Promise<Candidate> {
    return await this.prisma.user.create({
      data: candidate,
    });
  }

  async findByEmail(email: string): Promise<Candidate> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(id: string): Promise<Candidate> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
