import { HttpException, HttpStatus } from '@nestjs/common';

export class CandidateAlreadyExists extends HttpException {
  constructor() {
    super('Candidate already exists!', HttpStatus.CONFLICT);
  }
}
