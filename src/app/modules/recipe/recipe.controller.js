import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import RecipeService from '../../services/recipe.service';

export class RecipeController {

    async create ({ body: data, user }, res, next) {
        try {
            const recipe = await RecipeService.create({ data, user });

            return res.status(SUCCESS_CODE).json(recipe);
        } catch (e) {
            next(e);
        }
    }

    async update ({ body: data, user }, res, next) {
        try {
            const recipe = await RecipeService.update({ data, user });

            return res.status(SUCCESS_CODE).json(recipe);
        } catch (e) {
            next(e);
        }
    }

    async delete ({ user }, res, next) {
        try {
            await RecipeService.delete({ user });

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

    async getAllRecep ({ user }, res, next) {
        try{
            const allRecep = await RecipeService.getAllRecep(user);

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
