import { AuthController } from './auth.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const authController = new AuthController();

export default (router) => {
    router.post('/signup', ...middlewares(schemas, 'signup'), authController.signup);
    router.post('/login', authController.login);
    router.get('/email-verify/:id', authController.verifyEmail);
    router.get('/forgot-pass', authController.forgotPassEmail);
    router.get('/email-forgot-pass/:id', ...middlewares(schemas, 'reset'), authController.resetPassEmail);
};
