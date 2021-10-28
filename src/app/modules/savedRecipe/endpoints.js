import { SavedRecipeController } from './savedRecipe.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const savedRecipeController = new SavedRecipeController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), savedRecipeController.create);
    router.delete('/', ...middlewares(schemas, 'auth'), savedRecipeController.delete);
};
