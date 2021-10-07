import { AuthController } from './auth.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const authController = new AuthController();

export default (router) => {
    router.post('/signup', ...middlewares(schemas, 'auth'), authController.signup);
    router.post('/login', ...middlewares(schemas, 'auth'), authController.login);
    // router.get('/email-verify/:id', authController.verifyEmail);
};
