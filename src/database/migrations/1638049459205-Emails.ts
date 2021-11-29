import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Emails1638049459205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'emails',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'topic',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'subject',
                        type: 'varchar',
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                    },
                    {
                        name: 'html',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('emails')
    }

}
