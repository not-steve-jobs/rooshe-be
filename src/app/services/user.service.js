import User from '../models/user'
import { Conflict, NotFound } from '../errors';
import { Util } from "../helpers/util";

class UserService {

    async signup({email, password}) {
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (user)  throw new Conflict('user is created');
        const createdUser = await User.create({
            email,
            password:Util.generateHash(password)
        });
        return createdUser;
    };

    async update({body, param}) {
        const user = await User.findOne({
            where: {
                id: param.id
            }
        });
        if (!user) throw new NotFound('user not found');
        const { email, password } = body;
        user.password = Util.generateHash(password);
        user.email = email;
        await user.save();
        return user;
    };

    async delete(param) {
        return await User.destroy({
            where: {
                id: param.id
            }
        });
    };

    async getOneUser(param) {
        const user = await User.findOne({
            where: {
                id: param.id
            }
        });
        if (!user) throw new NotFound('user not found');
        return user;
    };

    async getAllUsers() {
      const allUsers = User.findAll({});
      return allUsers;
    };

}
export default new UserService();
