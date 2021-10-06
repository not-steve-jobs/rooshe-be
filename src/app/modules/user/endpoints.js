import { UserController } from './user.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const userController = new UserController();

export default (router) => {
    router.post('/signup', ...middlewares(schemas, 'user'), userController.signup);
    router.put('/:id', ...middlewares(schemas, 'user'), userController.update);
    router.delete('/:id', userController.delete);
    router.get('/all-users', userController.getAllUsers);
    router.get('/:id', userController.getOneUser);
};
