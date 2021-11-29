import { Kafka } from 'kafkajs'

import { Email } from '../entities/Email'
import { CreateBet, SendMailForAdmins } from '../services/CreateBet'
import { getConnection } from 'typeorm'
import { CreateUser } from '../services/CreateUser'
import { ForgotPssword } from '../services/ForgotPassword'

interface ConsumerProps{
    groupId: string
    topic: string
    fromBeginning?: boolean
}

const kafka = new Kafka({
    clientId: 'ms_emails',
    brokers: ['localhost:9092']
})

export const Consumer = async ({ groupId, topic, fromBeginning = false }: ConsumerProps) => {
    const consumer = kafka.consumer({ groupId })
    
    await consumer.connect()
    await consumer.subscribe({ topic, fromBeginning })
    
    await consumer.run({
        eachBatch: async ({ batch }) => {
            const emailRepository = getConnection().getRepository(Email)
            const email = await emailRepository.findOne({ topic: batch.topic })

            const message: {} | { email: any, [prop: string]: any } = {}
            for(let msg of batch.messages){
                message[`${msg.key}`] = msg.value.toString()
            }
            switch(batch.topic){
                case 'new-user':
                    CreateUser(message, email)
                    break;
                case 'new-bet':
                    CreateBet(message, email)
                    SendMailForAdmins(message)
                    break;
                case 'forgot-password':
                    ForgotPssword(message, email)
                    break;
            }
        }
    })
}