import { IsCEP, IsCPF } from 'brazilian-class-validator';
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

  @IsString()
  @IsNotEmpty()
  @IsCPF()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @IsCEP()
  cep: string;

  @IsOptional()
  @IsNotEmpty()
  @IsLatitude()
  latitude?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsLongitude()
  longitude?: number;

  year: number;
}
