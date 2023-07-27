import { IsNotEmpty, IsString } from 'class-validator';

export class PoliticalPartyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
