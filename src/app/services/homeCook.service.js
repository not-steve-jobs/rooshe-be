import User from '../models/user';
import HomeCook from '../models/homeCook';
import { Conflict, NotFound, ValidationError } from '../errors';
import { VALIDATION_ERROR } from '../configs/constants';
import { CONFLICT_CODE } from '../configs/status-codes';

class HomeCookService {

    async create(_id) {
        const user = await  User.findOne({
            where: { id: _id }
        });
        if (!user) {
            throw new NotFound('user not found');
        } else if (user.status !== 'active') {
            throw new ValidationError(VALIDATION_ERROR);
        } else if (user.is_homeCook === 1) {
            throw new Conflict(CONFLICT_CODE, { message: 'User already homeCook' });
        }
        user.is_homeCook = 1;
        await user.save();

        return await HomeCook.create({
            status: 'active',
            user_id: _id
        });
    }

}

export default new HomeCookService();
