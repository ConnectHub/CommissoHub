import { Module } from '@nestjs/common';
import { RequesterService } from './request.service';
import { Requester } from 'src/domain/entities/requester';

@Module({
  providers: [
    {
      provide: Requester,
      useClass: RequesterService,
    },
  ],
  exports: [Requester],
})
export class RequesterModule {}
