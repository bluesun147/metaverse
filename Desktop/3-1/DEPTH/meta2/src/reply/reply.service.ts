import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReplyRepository } from './reply.repository';

@Injectable()
export class ReplyService {
    constructor(
        @InjectRepository(ReplyRepository)
        private replyRepository: ReplyRepository, // 서비스에 Repository 주입.
    ) { }

    async postReply(user: string, content: string) {
        return await this.replyRepository.createReply(user, content);
    }

    async readAllReply() {
        return await this.replyRepository.find();
    }
}
