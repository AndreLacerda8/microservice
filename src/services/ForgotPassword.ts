import { Mailer } from "./Mailer";

export function ForgotPssword(message, email){
    Mailer({
        from: 'André <mail@example.com>',
        to: message.email,
        subject: email.subject,
        text: email.text.split('token_value').join(message.token_value),
        html: email.html.split('token_value').join(message.token_value)
    })
}