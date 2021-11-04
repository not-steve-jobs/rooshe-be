import { RecipeReviews } from '../models/associations';

import { NotFound } from '../errors';
import { NOT_EXISTS } from "../configs/constants";

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
            { where: { id: _id } }
        );
    }

    async delete(_id) {
        const review = await RecipeReviews.findOne({
            where: { id: _id}
        });
        if(!review) { throw new NotFound(NOT_EXISTS('review')); }

        return await RecipeReviews.destroy({
            where: { id: _id }
        });
    }

}

export default new RecipeReviewService();
