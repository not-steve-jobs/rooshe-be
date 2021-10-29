import { User } from '../models/associations';

import { NotFound } from '../errors';

class UserService {

    async update({ data, _id }) {
        return await User.update(
            { ...data },
            { where: { id: _id } }
        );
    }

    async delete(_id) {
        return await User.destroy({
            where: { id: _id }
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
