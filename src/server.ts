import 'reflect-metadata'
import express from 'express'
import { Kafka } from 'kafkajs'
// import './database'

import nodemailer from 'nodemailer'
import { Consumer } from './kafkaServices/Consumer'

const app = express()

Consumer({
    groupId: 'test-group',
    topic: 'new-user',
})

Consumer({
    groupId: 'test-group',
    topic: 'new-bet',
})

Consumer({
    groupId: 'test-group',
    topic: 'forgot-password',
})

app.get('/', async (req, res) => {
})

app.listen(8080, () => {
    console.log('Running')
})