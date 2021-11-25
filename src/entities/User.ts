import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryColumn()
    id: number

    @Column()
    email: string

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date
}
