import { SavedRecipe } from '../models/associations';

class SavedRecipeService {

    async create({ user_id, recipe_id }) {
        return await SavedRecipe.create({
            user_id,
            recipe_id
        });
    }

    async delete(_id) {
        return await SavedRecipe.destroy({
            where: { id: _id }
        });
    }

}

export default new SavedRecipeService();
