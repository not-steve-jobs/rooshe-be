import { RecipeHashtagController } from './recipeHashtag.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const recipeHashtagController = new RecipeHashtagController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), recipeHashtagController.create);
    router.put('/:id', ...middlewares(schemas, 'auth'), recipeHashtagController.update);
    router.delete('/:id', ...middlewares(schemas, 'auth'), recipeHashtagController.delete);
};
