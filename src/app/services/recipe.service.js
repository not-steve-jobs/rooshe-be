import Recipe from '../models/recipe';
import { NotFound } from '../errors';

class RecipeService {

    async create ({ data, user }) {
        return await Recipe.create({
            ...data,
            userId: user.id
        });
    }

    async update (req) {
        const _id = req.params.id;
        const data = req.body;
        let recipe = await Recipe.findOne({
            where: { id: _id }
        });
        if (!recipe) {
            throw new NotFound('recipe not found');
        }
        recipe = { data };

        return recipe;
    }

    async delete (params) {
        return await Recipe.destroy({
            where: { id: params.id }
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
