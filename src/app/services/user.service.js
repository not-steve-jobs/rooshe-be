import User from '../models/user'
import { Conflict } from '../errors';
import { Util } from "../helpers/util";

class UserService {

    async signup({email, password}) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (user) {
            throw new Conflict('user is created');
        }
        const createdUser = await User.create({
            email,
            password:Util.generateHash(password)
        });
        return createdUser;
    }


}
export default new UserService();
