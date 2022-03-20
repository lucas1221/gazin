const dbConfig = require('../config/dbconfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connected!')
})
.catch(err => {
    console.log('erro'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.desenvolvedores = require('./desenvolvedoresModel.js')(sequelize, DataTypes)
db.niveis = require('./niveisModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Re-Sync deu certo!')
})

db.niveis.belongsTo(db.desenvolvedores, {
    foreignKey: 'nivel',
    as: 'devnivel'
})

module.exports = db;