import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Controller('candidate')
export class CandidateController {
  private readonly logger = new Logger(CandidateController.name);
  constructor(private readonly candidateService: CandidateService) {}

  @Post('create')
  async create(@Body() candidate: CreateCandidateDto) {
    this.logger.log(`Creating candidate ${candidate.email}`);
    return await this.candidateService.create(candidate);
  }
}
