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
        const _id = req.params.id;
        const data = req.body;
        const userRecipeCategory = await UserRecipeCategories.findOne({
            where: {  recipeId: _id }
        });
        const category = await RecipeCategories.findOne({
            where: { id: userRecipeCategory.recipeCategoryId }
        });

        return await category.update({
            name: data.category
        });
    }

}

export default new RecipeCategoryService();
