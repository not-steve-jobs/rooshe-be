import User from '../models/user';
import { BadRequest, Conflict, NotFound } from '../errors';
import { NOT_EXISTS, INVALID } from '../configs/constants';
import { Util } from '../helpers/util';

class AuthService {

    async signup({ body, verifyToken }) {
        const user = await User.findOne({
            where: {
                email: body.email
            }
        });
        if (user)  {throw new Conflict('user is created');}
        const createdUser = await User.create({
            ...body,
            verifyToken,
            password: Util.generateHash(body.password)
        });

        return createdUser;
    }

    async login({ email, password }) {
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        const isVerify = Util.validateHash(password,user.password);
        if(!isVerify) {
            throw new BadRequest(INVALID('password'));
        }

        return {
            accessToken: Util.createToken(user.id),
            user
        };
    }

    async verifyEmail(id) {
        const user = await User.findOne({
            where: {
                verifyToken: id
            }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        } else if(user.status === 'active') {
            throw new Conflict('User has been already verified. Please Login');
        } else {
            user.status = 'active';
            user.verifyToken = null;
            await user.save();
        }

        return user;
    }

    async forgotPassEmail({ email, verifyTokenReset }) {
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        user.verifyToken = verifyTokenReset;
        await user.save();

        return user;
    }

    async resetPassEmail({ id, body }) {
        const user = await User.findOne({
            where: {
                verifyToken: id
            }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        user.password = Util.generateHash(body.password);
        user.verifyToken = null;
        await user.save();

        return user;
    }

}

export default new AuthService();
