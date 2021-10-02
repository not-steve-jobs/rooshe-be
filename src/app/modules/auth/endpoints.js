import { AuthController } from './auth.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const authController = new AuthController();

export default (router) => {
    router.post('/login', ...middlewares(schemas, 'login'), authController.login);
}
