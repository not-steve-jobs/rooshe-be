import {
    CREATED_CODE,
    NO_CONTENT_CODE,
    SUCCESS_CODE
} from '../../configs/status-codes';
import UserService from '../../services/user.service';
export class UserController {

    async update(req, res, next) {
        try {
            const body = req.body;
            const param = req.params;
            const user = await UserService.update({ body, param });

            return res.status(SUCCESS_CODE).json(user);
        }catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const param = req.params;
            const user = await UserService.delete(param);

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async getOneUser(req,res,next) {
        try{
            const param = req.params;
            const user = await UserService.getOneUser(param);

            return res.status(SUCCESS_CODE).json(user);
        } catch (e) {
            next(e);
        }
    }

    async getAllUsers (req, res, next) {
        try {
            const allUsers = await UserService.getAllUsers();

            return res.status(SUCCESS_CODE).json(allUsers);
        }  catch (e) {
            next(e);
        }
    }
}
