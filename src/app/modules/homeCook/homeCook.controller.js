import { SUCCESS_CODE } from '../../configs/status-codes';
import HomeCookService from '../../services/homeCook.service';

export class HomeCookController {

    async create(req, res, next) {
        try {
            const _id = req.user.id;
            const homeCook = await HomeCookService.create(_id);

            return res.status(SUCCESS_CODE).json(homeCook);
        } catch (e) {
            next(e);
        }
    }

}
