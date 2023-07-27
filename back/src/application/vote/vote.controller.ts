import { Body, Controller, Logger, Post } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteDto } from './dto/vote.dto';

@Controller('vote')
export class VoteController {
  private readonly logger = new Logger(VoteController.name);
  constructor(private readonly voteService: VoteService) {}

  @Post()
  async vote(@Body() voteDto: VoteDto) {
    this.logger.log(`Voting for candidate ${voteDto.candidateId}`);
    return await this.voteService.vote(voteDto);
  }
}
