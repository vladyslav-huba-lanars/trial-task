import { config } from "dotenv";
import { resolve } from 'path'
config({ path: resolve(import.meta.dirname, '../.env') })

export default {
  hashingRounds: 8,
  database: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  },
  port: process.env.PORT ?? 3000
}
