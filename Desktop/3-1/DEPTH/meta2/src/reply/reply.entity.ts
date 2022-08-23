import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Reply")
export class Reply extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: true})
    user: string;

    @Column({nullable: true})
    content: string;

    // 작성 시간
    @CreateDateColumn() 
    date: Date;
}