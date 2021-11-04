import { RecipeHashtags } from '../models/associations';

class RecipeHashtagService {

    async create({data, recipe}) {
        const arr = [];
        data.hashtag.forEach( item => {
            arr.push({
                name: item
            })
        });
        const hashtag = await RecipeHashtags.bulkCreate(arr);
        hashtag.map(async item => {
            await item.addRecipe(recipe)
        });

        return hashtag;
    }

}

export default new RecipeHashtagService();
