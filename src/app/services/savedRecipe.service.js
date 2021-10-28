import SavedRecipe from '../models/savedRecipe';

class SavedRecipeService {

    async create({ user_id, recipe_id }) {
        return await SavedRecipe.create({
            user_id,
            recipe_id
        });
    }

    async delete({ user_id, recipe_id }) {
        return await SavedRecipe.destroy({
            where: {
                user_id,
                recipe_id
            }
        });
    }

}

export default new SavedRecipeService();
