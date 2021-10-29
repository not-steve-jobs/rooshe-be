import { RecipeHashtags } from '../models/associations';

class RecipeHashtagService {

    async create(data) {
        return await RecipeHashtags.create({
            ...data
        });
    }

    async update({ data, _id }) {
        return await RecipeHashtags.update(
            { ...data },
            { where: { id: _id } }
        );
    }

    async delete(_id) {
        return await RecipeHashtags.destroy({
            where: { id: _id }
        });
    }

}

export default new RecipeHashtagService();
