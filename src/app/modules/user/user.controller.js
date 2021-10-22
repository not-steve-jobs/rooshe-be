import { SUCCESS_CODE } from '../../configs/status-codes';
import UserService from '../../services/user.service';

export class UserController {

    async update(req, res, next) {
        try {
            const _id = req.user.id;
            const data = req.body;
            const user = await UserService.update({ data, _id });

            return res.status(SUCCESS_CODE).json(user);
        }catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const _id = req.user.id;
            const user = await UserService.delete(_id);

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
