import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class VoteDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  candidateId: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsLatitude()
  latitude?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsLongitude()
  longitude?: string;

  year: number;
}
