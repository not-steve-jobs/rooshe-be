import Recipe from '../models/recipe';
import { NotFound } from '../errors';

class RecipeService {

    async create ({ data, user }) {
        return await Recipe.create({
            ...data,
            userId: user.id
        });
    }

    async update ({ data, user }) {
        let recipe = await Recipe.findOne({
            where: { userId: user.id }
        });
        if (!recipe) {
            throw new NotFound('recipe not found');
        }
        recipe = { data };
        await recipe.save();

        return recipe;
    }

    async delete (user) {
        return await Recipe.destroy({
            where: {
                userId: user.id
            }
        });
    }

    async getOneRecep(params) {
        const recipe = Recipe.findOne({
            where: { id: params.id }
        });
        if (!recipe) { throw new NotFound('recipe not found'); }

        return recipe;
    }

    async getAllRecep() {
        return Recipe.findAll();
    }

    async getAllRecepWitchThisUSer(user) {
        return Recipe.findAll({
            where: { userId: user.id }
        });
    }
}

export default new RecipeService();
