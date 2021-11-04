import { SUCCESS_CODE } from '../../configs/status-codes';

import RecipeService from '../../services/recipe.service';
import RecipeHashtagService from '../../services/recipeHashtag.service';
import RecipeCategoryService from "../../services/recipeCategory.service";

export class RecipeController {

    async create ({ body: data, user }, res, next) {
        try {
            const recipe = await RecipeService.create({ data, user });
            const hashtag = await RecipeHashtagService.create({ data, recipe });
            const recipeCategories = await RecipeCategoryService.create({ data, recipe });

            return res.status(SUCCESS_CODE).json({ recipe, hashtag, recipeCategories });
        } catch (e) {
            next(e);
        }
    }

    async update (req, res, next) {
        try {
            const recipe = await RecipeService.update(req);

            return res.status(SUCCESS_CODE).json(recipe);
        } catch (e) {
            next(e);
        }
    }

    async delete ({ params }, res, next) {
        try {
            await RecipeService.delete(params);

            return res.status(SUCCESS_CODE).json('Recipe deleted');
        } catch (e) {
            next(e);
        }
    }

    async getOneRecep ({ params }, res, next) {
        try {
            const recipe = await RecipeService.getOneRecep(params);

            return res.status(SUCCESS_CODE).json(recipe);
        } catch (e) {
            next(e);
        }
    }

    async getAllRecep (req, res, next) {
        try{
            const allRecep = await RecipeService.getAllRecep();

            return res.status(SUCCESS_CODE).json(allRecep);
        } catch (e) {
            next(e);
        }
    }

    async getAllRecepWitchThisUSer({ user }, res, next) {
        try{
            const allRecepWitchThisUSer = await RecipeService.getAllRecepWitchThisUSer(user);

            return res.status(SUCCESS_CODE).json(allRecepWitchThisUSer);
        }catch (e) {
            next(e);
        }
    }
}
