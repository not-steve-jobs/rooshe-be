import { RecipeCategories, UserRecipeCategories } from '../models/associations';

class RecipeCategoryService {

    async create({ data, recipe }) {
        const recipeCategory = await RecipeCategories.create({
            name: data.category
        });
        const userRecipeCategory = await UserRecipeCategories.create({
            recipeId: recipe.id,
            recipeCategoryId: recipeCategory.id
        });

        return { recipeCategory, userRecipeCategory };
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
