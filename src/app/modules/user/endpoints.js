import { UserController } from './user.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const userController = new UserController();

export default (router) => {
    router.put('/:id', ...middlewares(schemas, 'user'), userController.update);
    router.delete('/:id', userController.delete);
    router.get('/all-users', userController.getAllUsers);
    router.get('/one/:id', userController.getOneUser);
};
