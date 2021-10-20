import {
    apiPort,
    dbHost, dbUser, dbPassword, dbPort, db,
    tokenKey,
    emailUser, emailPassword, testEmailUser, testEmailPassword
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
        emailPassword,
        testEmailUser,
        testEmailPassword
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
        emailPassword,
        testEmailUser,
        testEmailPassword
    }
};
export default params[process.env.NODE_ENV || 'development'];
