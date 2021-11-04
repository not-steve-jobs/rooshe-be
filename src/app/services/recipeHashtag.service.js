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

    async update({ data, recipe }) {
        const userHashtag = await UserHashtags.findAll({
            where: { recipeId: recipe.id }
        });

        return await RecipeHashtags.update(
            { where: {id: userHashtag.recipeHashtagId} },
            { name: data.hashtag }
        );
    }

}

export default new RecipeHashtagService();
