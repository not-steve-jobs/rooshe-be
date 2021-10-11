import User from '../models/user';
import { BadRequest, Conflict, NotFound, ValidationError } from '../errors';
import { INVALID, NOT_EXISTS } from '../configs/constants';
import { Util } from '../helpers/util';

class AuthService {

    async signup({ body, verifyToken }) {
        const user = await User.findOne({
            where: {
                email: body.email
            }
        });
        if (user)  {throw new Conflict('user is created');}

        return await User.create({
            ...body,
            verifyToken,
            password: Util.generateHash(body.password)
        });
    }

    async login({ email, password }) {
        const user = await User.findOne({
            where: {
                email
            }
        });
        const isVerify = await Util.validateHash(password,user.password);
        // if user enter invalid email, shows another error  (_task)
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
    // dont work validation  (_task)
    async resetPassEmail({ id, body }) {
        const user = await User.findOne({
            where: {
                verifyToken: id
            }
        });
        if (!user) {
            throw new NotFound(NOT_EXISTS('user'));
        }
        user.password = await Util.generateHash(body.password);
        user.verifyToken = null;
        await user.save();

        return user;
    }

}

export default new AuthService();
