import { Injectable } from '@nestjs/common';
import { Location } from 'src/domain/entities/location';
import { Vote } from 'src/domain/entities/vote';
import { VoteRepositoryInterface } from 'src/domain/repositories/vote';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class VoteRepository implements VoteRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}
  async vote(vote: Vote): Promise<Vote> {
    return await this.prisma.vote.create({
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

  async updateLatLong(
    id: string,
    lat: number,
    long: number,
    municipality: string,
  ): Promise<void> {
    await this.prisma.vote.update({
      where: {
        id,
      },
      data: {
        latitude: lat,
        longitude: long,
        municipality,
      },
    });
  }

  async getMapLocations(candidateId: string): Promise<any> {
    return await this.prisma.vote.groupBy({
      by: ['municipality'],
      _count: {
        municipality: true,
      },
      where: {
        candidateId,
      },
    });
  }

  async getLatLong(municipality: string): Promise<Location> {
    const { longitude, latitude } = await this.prisma.vote.findFirst({
      where: {
        municipality,
      },
    });
    return {
      lat: latitude,
      long: longitude,
      municipality,
    };
  }
}
