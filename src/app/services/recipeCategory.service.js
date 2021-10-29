import { RecipeCategories } from '../models/associations';

class RecipeCategoryService {

    async create(data) {
        return await RecipeCategories.create({ ...data });
    }

    async update({ data, params }) {
        return await RecipeCategories.update(
            { ...data },
            { where: { id: params.id } }
        );
    }

    async delete(params) {
        return await RecipeCategories.destroy({
            where: { id: params.id }
        });
    }
}

export default new RecipeCategoryService();
