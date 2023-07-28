import { Injectable, Logger } from '@nestjs/common';
import { RequesterService } from 'src/infra/request/request.service';
import { CepIsNotValid } from '../errors/cep-is-not-valid';

interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}
@Injectable()
export class ValidateCep {
  private readonly logger = new Logger(ValidateCep.name);
  constructor(private readonly cep: string) {
    if (!cep) throw new CepIsNotValid();
  }

  async validate(): Promise<boolean> {
    try {
      this.logger.log(`Validating cep ${this.cep}`);
      const cep = this.formatCep();
      const data: CepData = await new RequesterService().get(
        `https://viacep.com.br/ws/${cep}/json/`,
      );
      return !!data.cep;
    } catch (error) {
      throw new CepIsNotValid();
    }
  }

  private formatCep(): string {
    return this.cep.replace(/\D/g, '');
  }
}
