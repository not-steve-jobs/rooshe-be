import { Recipe, HomeCook } from '../models/associations';

import { NotFound } from '../errors';
import { NOT_EXISTS } from '../configs/constants';

class RecipeService {

    async create ({ data, user }) {
        const homeCook = await HomeCook.findOne({
            where: { user_id: user.id }
        });
        if (!homeCook) { throw new NotFound(NOT_EXISTS('homeCook')); }

        return await Recipe.create({
            ...data,
            user_id: user.id
        });
    }

    async update (req) {
        const _id = req.params.id;
        const recipe = await Recipe.findOne({
            where: { id: _id }
        });
        if (!recipe) { throw new NotFound(NOT_EXISTS('recipe')); }
        const data = req.body;

        return await Recipe.update(
            { ...data },
            { where: {id: _id} }
        );
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
            where: { user_id: user.id }
        });
    }
}

export default new RecipeService();
