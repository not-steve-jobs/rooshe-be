import RecipeCategories from '../models/recipeCategories';

class RecipeCategoryService {

    async create(data) {

        return await RecipeCategories.create({ ...data });
    }

    async update({ data, param }) {

        return await RecipeCategories.update(
            { ...data },
            { where: { id: param.id } }
        );
    }

    async delete(param) {

        return await RecipeCategories.destroy({
            where: { id: param.id }
        });
    }
}

export default new RecipeCategoryService();