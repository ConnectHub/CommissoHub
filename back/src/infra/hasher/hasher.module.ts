import { Module } from '@nestjs/common';
import { Hasher } from 'src/domain/entities/hasher';
import { HasherService } from './hasher.service';

@Module({
  providers: [
    {
      provide: Hasher,
      useClass: HasherService,
    },
  ],
  exports: [Hasher],
})
export class HasherModule {}
