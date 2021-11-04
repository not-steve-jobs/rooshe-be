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
