import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import RecipeCommentService from '../../services/recipeComment.service';

export class RecipeCommentController {

    async create(req, res, next) {
        try {
            const data = req.body;
            const _id = req.user.id;
            const comment = await RecipeCommentService.create({ data, _id });

            return res.status(SUCCESS_CODE).json(comment);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const comment = await RecipeCommentService.create({ data, _id });

            return res.status(SUCCESS_CODE).json(comment);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const _id = req.params.id;
            await RecipeCommentService.create(_id);

            return res.status(SUCCESS_CODE).json('comment deleted');
        } catch (e) {
            next(e);
        }
    }
}
