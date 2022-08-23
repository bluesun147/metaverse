import { EntityRepository, Repository } from "typeorm";
import { Reply } from "./reply.entity";

@EntityRepository(Reply)
export class ReplyRepository extends Repository<Reply> {
    
    async createReply(user: string, content: string) {
        const reply = this.create({
            user,
            content
        })

        return this.save(reply);
    }
}