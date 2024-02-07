import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1707279981046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'items',
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "colour",
                        type: "varchar",
                    },
                    {
                        name: "height",
                        type: "float",
                    },
                    {
                        name: "weight",
                        type: "float",
                    },
                    {
                        name: "width",
                        type: "float",
                    },
                    {
                        name: "length",
                        type: "float",
                    },
                    {
                        name: "quantity",
                        type: "float",
                    },
                    {
                        name: "stackable",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "tiltable",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: 'CURRENT_TIMESTAMP'
                    },

                ]
            },
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('drop table items');
    }

}
