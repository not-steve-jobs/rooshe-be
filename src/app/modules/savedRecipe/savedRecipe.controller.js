import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import SavedRecipeService from '../../services/savedRecipe.service';

export class SavedRecipeController {

    async create(req, res, next) {
        try {
            const user_id = req.user.id;
            const recipe_id = req.body.recipe.id;
            await SavedRecipeService.create({ user_id, recipe_id });

            return res.status(SUCCESS_CODE).json('recipe saved');
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const user_id = req.user.id;
            const recipe_id = req.body.recipe.id;
            await SavedRecipeService.delete({ user_id, recipe_id });

            return res.status(SUCCESS_CODE).json('recipe removed from savedRecipe');
        } catch (e) {
            next(e);
        }
    }
}
