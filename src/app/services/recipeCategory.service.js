import { RecipeCategories } from '../models/associations';

class RecipeCategoryService {

    async create(data) {
        return await RecipeCategories.create({
            name: data.category
        });
    }

    async update(req) {
        const data = req.body;
        const _id = req.params.id;

        return await RecipeCategories.update(
            { name: data.category },
            { where: {id: _id} }
        );
    }

}

export default new RecipeCategoryService();
