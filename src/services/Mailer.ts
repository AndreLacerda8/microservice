import nodemailer from 'nodemailer'

interface MailerProps{
    from: string
    to: string
    subject: string
    text: string
    html: string
}

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "401c17dc5a688a",
        pass: "62ffdda1285368"
    }
})

export const Mailer = async ({ from, to, subject, text, html }: MailerProps) => {
    await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html
    })
}