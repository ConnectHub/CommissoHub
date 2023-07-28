import { Injectable } from '@nestjs/common';
import { Vote } from 'src/domain/entities/vote';
import { VoteRepositoryInterface } from 'src/domain/repositories/vote';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class VoteRepository implements VoteRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}
  async vote(vote: Vote): Promise<void> {
    await this.prisma.vote.create({
      data: vote,
    });
  }

  async alreadyVoted(cpf: string): Promise<boolean> {
    const vote = await this.prisma.vote.findFirst({
      where: {
        cpf,
        year: new Date().getFullYear(),
      },
    });
    return !!vote;
  }
}
