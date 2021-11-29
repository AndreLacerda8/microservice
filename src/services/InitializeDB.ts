import { getConnection } from 'typeorm'

async function initializePermissions(){
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into('permissions')
        .values([
            { name: 'admin' }
        ])
        .execute()
}

async function initializeUsers(){
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into('users')
        .values([
            { email: 'andrlacerda@mail.com' },
            { email: 'manoelFernandes@mail.com' }
        ])
        .execute()
    
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into('users_permissions')
        .values([
            { user_id: 1, permission_id: 1 },
            { user_id: 2, permission_id: 1 }
        ])
        .execute()
}

async function initializeEmails(){
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into('emails')
        .values([
            { topic: 'new-bet', subject: 'Nova aposta', text: 'Você realizou uma nova aposta', html: '<p>Você realizou uma nova aposta no valor de bet_value</p>' },
            { topic: 'new-user', subject: 'Bem-vindo', text: 'Seja bem vindo ao nosso site', html: '<p>Seja bem vindo ao nosso site user_name</p>' },
            { topic: 'forgot-password', subject: 'Recuperar senha', text: 'Recupere sua senha', html: '<p>Recupere sua senha com o token token_value</p>' }
        ])
        .execute()
}

export {
    initializePermissions,
    initializeUsers,
    initializeEmails
}