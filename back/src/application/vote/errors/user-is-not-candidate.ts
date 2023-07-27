import { HttpException, HttpStatus } from '@nestjs/common';

export class UserIsNotCandidate extends HttpException {
  constructor() {
    super('User is not a candidate!', HttpStatus.CONFLICT);
  }
}
