import {HomeCook, UserFollowers} from '../models/associations';

class UserFollowerService {

    async follow(user_id) {
        const homecook = await HomeCook.findOne({
            where: { user_id }
        });
        return await UserFollowers.create({
            user_id,
            homeCook_id: homecook.id
        });
    }

    async unFollow(_id) {
        return await UserFollowers.destroy({
            where: { id: _id }
        });
    }

}

export default new UserFollowerService();
