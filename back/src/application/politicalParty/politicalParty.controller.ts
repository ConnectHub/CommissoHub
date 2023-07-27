import { Body, Controller, Logger, Post } from '@nestjs/common';
import { PoliticalPartyService } from './politicalParty.service';
import { PoliticalPartyDto } from './dto/politicalParty.dto';

@Controller('politicalParty')
export class PoliticalPartyController {
  private readonly logger = new Logger(PoliticalPartyController.name);
  constructor(private readonly politicalPartyService: PoliticalPartyService) {}

  @Post('create')
  async create(@Body() politicalPartyDto: PoliticalPartyDto) {
    this.logger.log(`Creating politicalParty ${politicalPartyDto.name}`);
    return await this.politicalPartyService.create(politicalPartyDto);
  }
}
