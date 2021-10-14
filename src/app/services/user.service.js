import User from '../models/user';
import { NotFound } from '../errors';

class UserService {

    async update({ data, param }) {
        let user = await User.findOne({
            where: { id: param.id }
        });
        if (!user) { throw new NotFound('user not found'); }
        user = {
            ...data
        };
        await user.save();

        return user;
    }

    async delete(param) {
        return await User.destroy({
            where: { id: param.id }
        });
    }

    async getOneUser(param) {
        const user = await User.findOne({
            where: { id: param.id }
        });
        if (!user) { throw new NotFound('user not found'); }

        return user;
    }

    async getAllUsers() {
        return User.findAll({});
    }

}

export default new UserService();
