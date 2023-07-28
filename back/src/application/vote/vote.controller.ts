import { Body, Controller, Post } from '@nestjs/common';
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
}
