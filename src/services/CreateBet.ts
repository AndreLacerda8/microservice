import { getConnection } from "typeorm";
import { Permission } from "../entities/Permission";
import { User } from "../entities/User";
import { UsersPermission } from "../entities/UsersPermission";
import { Mailer } from "./Mailer";

export async function SendMailForAdmins(message){
    const permissionRepository = getConnection().getRepository(Permission)
    const adminPermission = await permissionRepository.findOne({ name: 'admin' })

    const usersPermissionRepository = getConnection().getRepository(UsersPermission)
    const admins = await usersPermissionRepository.find({ permission_id: adminPermission.id })

    const userRepository = getConnection().getRepository(User)

    for(let admin of admins){
        const user = await userRepository.findOne(admin.user_id)
        Mailer({
            from: 'André',
            to: user.email,
            subject: 'Nova aposta',
            text: `O usuário de email ${message.email} acabou de realizar uma aposta`,
            html: `<p>O usuário de email ${message.email} acabou de realizar uma aposta</p>`
        })
    }
}

export function CreateBet(message, email){
    Mailer({
        from: 'André <mail@example.com>',
        to: message.email,
        subject: email.subject,
        text: email.text.split('bet_value').join(message.bet_value),
        html: email.html.split('bet_value').join(message.bet_value)
    })
}