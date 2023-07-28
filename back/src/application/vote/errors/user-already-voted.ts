import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyVoted extends HttpException {
  constructor() {
    super('User already voted!', HttpStatus.CONFLICT);
  }
}
