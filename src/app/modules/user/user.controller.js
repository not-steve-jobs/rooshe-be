import {
    CREATED_CODE,
    NO_CONTENT_CODE,
    SUCCESS_CODE
} from '../../configs/status-codes';
import UserService from '../../services/user.service';
export class UserController {
    async signup(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await UserService.signup({email,password})

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }
}