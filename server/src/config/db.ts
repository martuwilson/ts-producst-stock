import {Sequelize} from 'sequelize'

const db = new Sequelize(
    process.env.DB_URL,
    {
        dialectOptions: {
            ssl: {
                require: true,
            }
        },
    }
)

export default db