import { HttpException, HttpStatus } from '@nestjs/common';

export class CepIsNotValid extends HttpException {
  constructor() {
    super('Cep is not valid!', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
