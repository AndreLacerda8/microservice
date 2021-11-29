import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users_permissions')
export class UsersPermission {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    permission_id: number

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date
}
