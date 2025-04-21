import {Sequelize} from 'sequelize-typescript'

const db = new Sequelize(
    process.env.DB_URL!,
    {
        models: [__dirname + '/../models/**/*.ts'],
    }
)

export default db