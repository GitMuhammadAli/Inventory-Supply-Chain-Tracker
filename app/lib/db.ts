import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'inventoryDb',
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    logging: true,
})