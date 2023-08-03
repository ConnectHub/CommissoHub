import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteDto } from './dto/vote.dto';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  async vote(@Body() voteDto: VoteDto) {
    voteDto.year = new Date().getFullYear();
    return await this.voteService.vote(voteDto);
  }

  @Get('map/:candidateId')
  async getMapLocations(@Param('candidateId') candidateId: string) {
    return await this.voteService.getMapLocations(candidateId);
  }
}
