import {
    CREATED_CODE,
    NO_CONTENT_CODE,
    SUCCESS_CODE
} from '../../configs/status-codes';
import AuthService from '../../services/auth.service';
export class AuthController {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await AuthService.login({email,password})

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }
}