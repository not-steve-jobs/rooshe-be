import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import params from '../configs/params';

export class Util {
    static generateHash(password) {
        return bcrypt.hashSync(password, 10);
    }

    static validateHash(password, hash) {
        return bcrypt.compare(password, hash || '');
    }

    static createToken(userId) {
        return  jwt.sign(
            { id: userId },
            params.tokenKey,
            {
                expiresIn: '2h',
            }
        );
    }
}