import { RecipeHashtags } from '../models/associations';
import { UserHashtags } from "../models/associations";

class RecipeHashtagService {

    async create(data) {
        return await RecipeHashtags.bulkCreate({
            name: data.hashtag,
            returning: true
        });
    }

    async update(req) {
        const _id = req.params.id;
        const data = req.body;
        const userHashtag = await UserHashtags.find({
            where: { recipeId: _id }
        });

        return await RecipeHashtags.bulkupdate(
            { where: {id: userHashtag.recipeHashtagId} },
            { name: data.hashtag }
        );
    }

}

export default new RecipeHashtagService();
