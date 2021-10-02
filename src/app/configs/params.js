import {
    apiPort,
    dbHost,
    dbUser,
    dbPassword,
    dbPort,
    db, tokenKey
} from '../helpers/config';

const params = {
    development: {
        apiPort,
        dbHost,
        dbUser,
        dbPassword,
        db,
        dbPort,
        tokenKey
    },
    production: {
        apiPort,
        dbHost,
        dbUser,
        dbPassword,
        db,
        dbPort,
        tokenKey
    }
};
export default params[process.env.NODE_ENV || 'development'];