import { RecipeReviews } from '../models/associations';

class RecipeReviewService {

    async create({ user_id, data }) {
        return await RecipeReviews.create({
            ...data,
            user_id
        });
    }

    async update({ data, _id }) {
        return await RecipeReviews.update(
            { ...data },
            { where: {id: _id} }
        );
    }

    async delete(_id) {
        return await RecipeReviews.destroy({
            where: { id: _id }
        });
    }

}

export default new RecipeReviewService();
