import User from '../models/user';
import { BadRequest, Conflict, NotFound } from '../errors';
import { NOT_EXISTS,INVALID } from '../configs/constants';
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

}
export default new AuthService();
