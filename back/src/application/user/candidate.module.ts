import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { CandidateRepository } from './candidate.repository';
import { CandidateRepositoryInterface } from 'src/domain/repositories/candidate';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HasherModule } from 'src/infra/hasher/hasher.module';

@Module({
  imports: [PrismaModule, HasherModule],
  controllers: [CandidateController],
  providers: [
    CandidateService,
    {
      provide: CandidateRepositoryInterface,
      useClass: CandidateRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
  exports: [CandidateService],
})
export class CandidateModule {}
