import User from '../models/user';
import { NotFound } from '../errors';
import { Util } from '../helpers/util';

class UserService {

    async update({ body, param }) {
        const user = await User.findOne({
            where: {
                id: param.id
            }
        });
        if (!user) { throw new NotFound('user not found'); }
        const { firstName, lastName, email, password, phone, bDay, address } = body;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = Util.generateHash(password);
        user.phone = phone;
        user.bDay = bDay;
        user.address = address;
        await user.save();

        return user;
    }

    async delete(param) {
        return await User.destroy({
            where: {
                id: param.id
            }
        });
    }

    async getOneUser(param) {
        const user = await User.findOne({
            where: {
                id: param.id
            }
        });
        if (!user) { throw new NotFound('user not found'); }

        return user;
    }

    async getAllUsers() {
        const allUsers = User.findAll({});

        return allUsers;
    }

}
export default new UserService();
