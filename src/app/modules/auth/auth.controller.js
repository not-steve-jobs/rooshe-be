import {
    CREATED_CODE,
    NO_CONTENT_CODE,
    SUCCESS_CODE
} from '../../configs/status-codes';
import AuthService from '../../services/auth.service';
import MailService from '../../services/mail.service';
import crypto from "crypto";

export class AuthController {

    async signup(req, res, next) {
        try {
            const verifyToken = crypto.randomBytes(16).toString('hex');
            const body = req.body;
            const email = body.email;
            const user = await AuthService.signup({ body, verifyToken });
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
            const { id } = req.params;
            const user = await AuthService.verifyEmail(id);

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async forgotPassEmail(req, res, next) {
        try {
            const email = req.body.email;
            const verifyTokenReset = crypto.randomBytes(16).toString('hex');
            const user = await AuthService.forgotPassEmail({ email, verifyTokenReset });
            await MailService.sendResetVerifyURI(user);

            return res.status(SUCCESS_CODE).json('please go to email');
        }catch (e) {
            next(e);
        }
    }

    async resetPassEmail(req, res, next) {
        try {
            const { id } = req.params;
            const body = req.body;
            await AuthService.resetPassEmail({ id, body });

            return res.status(SUCCESS_CODE).json('your password reset');
        }catch (e) {
            next(e);
        }
    }

}
