import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date
}
