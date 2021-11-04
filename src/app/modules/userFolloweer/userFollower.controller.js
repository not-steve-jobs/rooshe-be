import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import UserFollowerService from '../../services/userFollower.service';

export class UserFollowerController {

    async follow(req, res, next) {
        try {
            const user_id = req.user.id;
            await UserFollowerService.follow(user_id);

            return res.status(SUCCESS_CODE).json('user follow');
        } catch (e) {
            next(e);
        }
    }

    async unFollow(req, res, next) {
        try {
            const _id = req.params.id;
            await UserFollowerService.unFollow(_id);

            return res.status(SUCCESS_CODE).json('user unFollow');
        } catch (e) {
            next(e);
        }
    }
}
