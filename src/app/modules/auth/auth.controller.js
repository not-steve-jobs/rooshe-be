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
            await MailService.send({ email, verifyToken });

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

    // async verifyEmail(req, res, next) {
    //     try{
    //         const { id } = req.params;
    //
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}
