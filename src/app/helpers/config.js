if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import env from 'env-var';

export const apiPort = env.get('PORT').asString();
export const dbHost = env.get('DB_HOST').asString();
export const dbUser = env.get('DB_USER').asString();
export const dbPassword = env.get('DB_PASSWORD').asString();
export const db = env.get('DB').asString();
export const dbPort = env.get('DB_PORT').asString();
export const tokenKey = env.get('TOKEN_KEY').asString();
export const emailUser = env.get('EMAIL_USER').asString();
export const emailPassword = env.get('EMAIL_PASSWORD').asString();
export const testEmailUser = env.get('TEST_EMAIL_USER').asString();
export const testEmailPassword = env.get('TEST_EMAIL_PASSWORD').asString();
