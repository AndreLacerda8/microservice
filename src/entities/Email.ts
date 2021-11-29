import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('emails')
export class Email {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    topic: string

    @Column()
    subject: string

    @Column()
    text: string

    @Column()
    html: string

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date
}
