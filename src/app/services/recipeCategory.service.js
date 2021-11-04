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

    async update({ data, recipe }) {
        const userRecipeCategory = await UserRecipeCategories.find({
            where: {  recipeId: recipe.id }
        });

        return await RecipeCategories.update(
            { name: data.category },
            { where: { id: userRecipeCategory.recipeCategoryId } }
        );
    }

}

export default new RecipeCategoryService();
