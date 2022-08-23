import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReplyService } from './reply.service';

@Controller('reply')
export class ReplyController {
    constructor(private readonly replyService: ReplyService) { }

    // 리뷰 작성
    @Post()
    postReply(@Body('user') user: string, @Body('content') content: string) {
        return this.replyService.postReply(user, content);
    }

    // 전체 리뷰 조회
    @Get()
    readAllReply() {
        return this.replyService.readAllReply();
    }
}
