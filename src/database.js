import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize({
  ...config.database,
  dialect: 'postgres',
  synchronize: false,
  pool: {
    max: 60,
    min: 10,
  },
  define: {
    timestamps: false
  }
})

await sequelize.authenticate()

export default sequelize;
