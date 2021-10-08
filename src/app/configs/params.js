import {
    apiPort,
    dbHost, dbUser, dbPassword, dbPort, db,
    tokenKey,
    emailUser, emailPassword
} from '../helpers/config';

const params = {
    development: {
        apiPort,
        dbHost,
        dbUser,
        dbPassword,
        db,
        dbPort,
        tokenKey,
        emailUser,
        emailPassword
    },
    production: {
        apiPort,
        dbHost,
        dbUser,
        dbPassword,
        db,
        dbPort,
        tokenKey,
        emailUser,
        emailPassword
    }
};
export default params[process.env.NODE_ENV || 'development'];
