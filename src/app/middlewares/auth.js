import { AuthError } from '../errors';
import jwt  from 'jsonwebtoken';
import User from '../models/user';
import { NOT_EXISTS } from '../configs/constants';

export default () => {
    return async (req, res, next) => {
        try {
            if (req.headers['authorization']) {
                const token = req.headers['authorization'].replace('Bearer ', '');
                const decoded = jwt.verify(token, process.env.TOKEN_KEY);
                const user = await User.findOne({
                    where: { id: decoded.id }
                });
                if (!user) {
                    throw new AuthError(NOT_EXISTS('User does not exist!'));
                }
                req.user = user;

                return next();
            }
            throw new AuthError('Session Expired!');

        } catch (e) {
            next(e);
        }
    };

};
