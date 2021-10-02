import { UserController } from './user.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const userController = new UserController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'signup'), userController.signup);
}
