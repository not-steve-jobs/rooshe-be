import { UserFollowerController } from './userFollower.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const userFollowerController = new UserFollowerController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), userFollowerController.follow);
    router.delete('/', ...middlewares(schemas, 'auth'), userFollowerController.unFollow);
};
