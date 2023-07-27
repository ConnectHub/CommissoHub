import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
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

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  cep?: string;

  @IsString()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string;

  @IsString()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string;
}
