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

    async update ({ body: data, params }, res, next) {
        try {
            const recipeCategories = await RecipeCategoryService.update({ data, params });

            return res.status(SUCCESS_CODE).json(recipeCategories);
        } catch (e) {
            next(e);
        }
    }

    async delete ({ params }, res, next) {
        try {
            await RecipeCategoryService.delete(params);

            return res.status(SUCCESS_CODE).json('recipeCategorie deleted');
        } catch (e) {
            next(e);
        }
    }
}
