import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import RecipeLikeService from '../../services/recipeLike.service';

export class RecipeLikeController {

    async like(req, res, next) {
        try {
            const user_id = req.user.id;
            const recipe_id = req.body.recipe.id;
            await RecipeLikeService.like({ user_id, recipe_id });

            return res.status(SUCCESS_CODE).json('user liked recipe');
        } catch (e) {
            next(e);
        }
    }

    async disLike(req, res, next) {
        try {
            const user_id = req.user.id;
            const recipe_id = req.body.recipe.id;
            await RecipeLikeService.disLike({ user_id, recipe_id });

            return res.status(SUCCESS_CODE).json('user disLiked recipe');
        } catch (e) {
            next(e);
        }
    }
}
