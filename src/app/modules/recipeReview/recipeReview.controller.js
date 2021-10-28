import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import RecipeReviewService from '../../services/recipeReview.service';

export class RecipeReviewController {

    async create(req, res, next) {
        try {
            const user_id = req.user.id;
            const data = req.body;
            const review = await RecipeReviewService.create({ user_id, data });

            return res.status(SUCCESS_CODE).json(review);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const review = await RecipeReviewService.update({ data, _id });

            return res.status(SUCCESS_CODE).json(review);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const _id = req.params.id;
            await RecipeReviewService.delete(_id);

            return res.status(SUCCESS_CODE).json('review deleted');
        } catch (e) {
            next(e);
        }
    }
}
