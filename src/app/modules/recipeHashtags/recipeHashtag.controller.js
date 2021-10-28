import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import RecipeHashtagService from '../../services/recipeHashtag.service';

export class RecipeHashtagController {

    async create(req, res, next) {
        try {
            const hashtag = await RecipeHashtagService.create(req.body);

            return res.status(SUCCESS_CODE).json(hashtag);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const hashtag = await RecipeHashtagService.update({ data, _id });

            return res.status(SUCCESS_CODE).json(hashtag);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const _id = req.params.id;
            await RecipeHashtagService.delete(_id);

            return res.status(SUCCESS_CODE).json('hashtag deleted');
        } catch (e) {
            next(e);
        }
    }
}
