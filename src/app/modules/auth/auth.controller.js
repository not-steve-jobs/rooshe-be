import { SUCCESS_CODE } from '../../configs/status-codes';
import AuthService from '../../services/auth.service';
import MailService from '../../services/mail.service';

export class AuthController {

    async signup(req, res, next) {
        try {
            const verifyToken = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            const data = req.body;
            const email = data.email;
            const user = await AuthService.signup({ data, verifyToken });
            await MailService.sendVerifyURI({ email, verifyToken });

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await AuthService.login({ email,password });

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async verifyEmail(req, res, next) {
        try{
            const _token = req.body._token;
            const user = await AuthService.verifyEmail(_token);

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async forgotPassEmail(req, res, next) {
        try {
            const email = req.body.email;
            const verifyTokenReset = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            const user = await AuthService.forgotPassEmail({ email, verifyTokenReset });
            await MailService.sendResetVerifyURI(user);

            return res.status(SUCCESS_CODE).json('please go to email');
        }catch (e) {
            next(e);
        }
    }

    async resetPassEmail(req, res, next) {
        try {
            const data = req.body;
            await AuthService.resetPassEmail(data);

            return res.status(SUCCESS_CODE).json('your password reset');
        }catch (e) {
            next(e);
        }
    }

}
