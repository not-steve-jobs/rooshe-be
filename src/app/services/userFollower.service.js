import UserFollowers from '../models/userFollowers';

class UserFollowerService {

    async follow({ user_id, homeCook_id }) {
        return await UserFollowers.create({
            user_id,
            homeCook_id
        });
    }

    async unFollow({ user_id, homeCook_id }) {
        return await UserFollowers.destroy({
            where: {
                user_id,
                homeCook_id
            }
        });
    }

}

export default new UserFollowerService();
