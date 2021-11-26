import { Kafka } from 'kafkajs'
import { Mailer } from '../services/Mailer'

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
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString()
            })

            Mailer({ from: 'André', to: message.value.toString(), subject: topic, text: 'Email', html: '<h1>Email</h1>' })
        }
    })
}