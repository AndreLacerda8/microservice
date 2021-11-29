import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { Mailer } from "./Mailer";

export async function CreateUser(message, email){
    const userRepository = getRepository(User)
    const newUser = userRepository.create({ email: message.email })
    await userRepository.save(newUser)

    Mailer({
        from: 'André <mail@example.com>',
        to: message.email,
        subject: email.subject,
        text: email.text.split('user_name').join(message.user_name),
        html: email.html.split('user_name').join(message.user_name)
    })
}