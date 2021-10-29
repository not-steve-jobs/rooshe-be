import { User } from '../models/associations'

import { Util } from '../helpers/util';
import { INVALID, NOT_EXISTS } from '../configs/constants';
import { BadRequest, Conflict, NotFound, ValidationError } from '../errors';

class AuthService {

    async signup({ data, verifyToken }) {
        const user = await User.findOne({
            where: { email: data.email }
        });
        if (user)  {throw new Conflict('user is created');}

        return await User.create({
            ...data,
            verifyToken,
            password: Util.generateHash(data.password)
        });
    }

    async login({ email, password }) {
        const user = await User.findOne({
            where: { email }
        });
        const isVerify = await Util.validateHash(password,user.password);
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        } else if (!isVerify) {
            throw new BadRequest(INVALID('password'));
        } else if (user.status === 'inactive') {
            throw new ValidationError('please check yor email');
        }

        return {
            accessToken: Util.createToken(user.id),
            user
        };
    }

    async verifyEmail(_token) {
        const user = await User.findOne({
            where: { verifyToken: _token }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        } else if(user.status === 'active') {
            throw new Conflict('User has been already verified. Please Login');
        }
        user.status = 'active';
        user.verifyToken = null;
        await user.save();

        return user;
    }

    async forgotPassEmail({ email, verifyTokenReset }) {
        const user = await User.findOne({
            where: { email }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        user.verifyToken = verifyTokenReset;
        await user.save();

        return user;
    }
    async resetPassEmail(data) {
        const user = await User.findOne({
            where: { verifyToken: data._token }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        user.password = await Util.generateHash(data.password);
        user.verifyToken = null;
        await user.save();

        return user;
    }

}

export default new AuthService();
