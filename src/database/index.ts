import { createConnection } from 'typeorm'

// export async function CreateConection(){
    createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "password",
        database: "ms_emails",
        entities: ["src/entities/*.ts"]
    })
// }