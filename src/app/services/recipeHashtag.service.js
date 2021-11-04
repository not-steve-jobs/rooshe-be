import { RecipeHashtags, UserHashtags } from '../models/associations';

class RecipeHashtagService {

    async create({data, recipe}) {
        const hashtag =  await RecipeHashtags.create({
            name: data.hashtag,

        });
        const userHashtag = await UserHashtags.create({
            recipeId: recipe.id,
            recipeHashtagId: hashtag.id
        });

        return { hashtag, userHashtag };
    }

    async update(req) {
        const _id = req.params.id;
        const data = req.body;
        const userHashtag = await UserHashtags.findOne({
            where: { recipeId: _id }
        });
        const hashtag = await RecipeHashtags.findOne({
            where: { id: userHashtag.recipeHashtagId }
        });

        return await hashtag.update({
            name: data.hashtag
        });
    }

}

export default new RecipeHashtagService();
