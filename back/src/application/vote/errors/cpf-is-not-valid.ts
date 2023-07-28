import { HttpException, HttpStatus } from '@nestjs/common';

export class CpfIsNotValid extends HttpException {
  constructor() {
    super('Cpf is not valid!', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
