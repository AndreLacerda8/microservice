import 'reflect-metadata'
import express from 'express'
import './database'

import { Consumer } from './kafkaServices/Consumer'
import { initializeEmails, initializePermissions, initializeUsers } from './services/InitializeDB'

const app = express()

Consumer({
    groupId: 'user',
    topic: 'new-user',
})

Consumer({
    groupId: 'bet',
    topic: 'new-bet',
})

Consumer({
    groupId: 'password',
    topic: 'forgot-password',
})

app.get('/', async (req, res) => {
    initializePermissions()
    initializeUsers()
    initializeEmails()
    return res.send('Seed Concluded')
})

app.listen(8080, () => {
    console.log('Running')
})