import { RecipeLikes } from '../models/associations';

class RecipeLikeService {

    async like({ user_id, recipe_id }) {
        return await RecipeLikes.create({
            user_id,
            recipe_id
        });
    }

    async disLike({ user_id, recipe_id }) {
        return await RecipeLikes.destroy({
            where: {
                user_id,
                recipe_id
            }
        });
    }

}

export default new RecipeLikeService();
