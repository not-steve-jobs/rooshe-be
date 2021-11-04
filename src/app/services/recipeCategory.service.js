import { RecipeCategories } from '../models/associations';

class RecipeCategoryService {

    async create({ data, recipe }) {
        const arr = [];
        data.category.forEach( item => {
            arr.push({
                name: item
            })
        });
        const category = await RecipeCategories.bulkCreate(arr);
        category.map(async item => {
            await item.addRecipe(recipe)
        });

        return category;
    }

}

export default new RecipeCategoryService();
