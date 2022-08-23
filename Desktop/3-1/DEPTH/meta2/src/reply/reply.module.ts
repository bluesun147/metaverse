import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyRepository } from './reply.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReplyRepository])
  ],
  providers: [ReplyService],
  controllers: [ReplyController]
})
export class ReplyModule {}
