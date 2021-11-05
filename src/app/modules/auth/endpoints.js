import { AuthController } from './auth.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const authController = new AuthController();

export default (router) => {
    router.post('/signup', ...middlewares(schemas, 'signup'), authController.signup);
    router.post('/email-verify', authController.verifyEmail);
    router.post('/login', authController.login);
    router.post('/forgot-pass', authController.forgotPassEmail);
    router.get('/check-user', authController.checkUser);
    router.post('/email-forgot-pass', ...middlewares(schemas, 'reset'), authController.resetPassEmail);
};
