import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import RecipeCategoryService from '../../services/recipeCategory.service';

export class RecipeCategoryController {

    async create ({ body: data }, res, next) {
        try{
            const recipeCategories = await RecipeCategoryService.create(data);

            return res.status(SUCCESS_CODE).json(recipeCategories);
        } catch (e) {
            next(e);
        }
    }

    async update ({ body: data, param }, res, next) {
        try {
            const recipeCategories = await RecipeCategoryService.update({ data, param });

            return res.status(SUCCESS_CODE).json(recipeCategories);
        } catch (e) {
            next(e);
        }
    }

    async delete ({ param }, res, next) {
        try {
            const recipeCategories = await RecipeCategoryService.delete(param);

            return res.status(SUCCESS_CODE).json('recipeCategorie deleted');
        } catch (e) {
            next(e);
        }
    }
}
