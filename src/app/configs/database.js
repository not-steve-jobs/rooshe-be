import Sequelize from 'sequelize';
import winston from 'winston';
import param from './params';

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.File({ filename: 'sequelize.log' })
    ]
});
const sequelize = new Sequelize(param.db, param.dbUser, param.dbPassword, {
    host: param.dbHost,
    port: param.dbPort,
    dialect: 'mysql',
    logging: msg => logger.log('debug', msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
sequelize.sync({ force: true });

module.exports = sequelize;
