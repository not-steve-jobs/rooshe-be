import { RecipeLikes } from '../models/associations';
import { Conflict } from "../errors";

class RecipeLikeService {

    async like({ user_id, recipe_id }) {
        const like = await RecipeLikes.findOne({
            where: {
                user_id,
                recipe_id
            }
        });
        if (like) { throw new Conflict('already liked') }

        return await RecipeLikes.create({
            user_id,
            recipe_id
        });
    }

    async disLike({ user_id, recipe_id }) {
        const like = await RecipeLikes.findOne({
            where: {
                user_id,
                recipe_id
            }
        });
        if (!like) { throw new Conflict('already disLiked') }

        return await RecipeLikes.destroy({
            where: {
                user_id,
                recipe_id
            }
        });
    }

}

export default new RecipeLikeService();
