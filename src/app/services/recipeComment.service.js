import { RecipeComments } from '../models/associations';

class RecipeCommentsService {

    async create({ data, _id }) {
        return await RecipeComments.create({
            comment: data.comment,
            recipe_id: data.recipe.id,
            parrent_id: data.parrent.id,
            user_id: _id
        });
    }

    async update({ data, _id }) {
        return await RecipeComments.update(
            { ...data },
            { where: { id: _id } }
        );
    }

    async delete(_id) {
        return await RecipeComments.destroy({
            where: { id: _id }
        });
    }
}

export default new RecipeCommentsService();
