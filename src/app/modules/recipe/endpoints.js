import { RecipeController } from './recipe.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const recipeController = new RecipeController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'recipe'), recipeController.create);
    router.put('/:id', ...middlewares(schemas, 'recipe'), recipeController.update);
    router.delete('/:id', ...middlewares(schemas, 'auth'), recipeController.delete);
    router.get('/', ...middlewares(schemas, 'auth'), recipeController.getAllRecepWitchThisUSer);
    router.get('/all', ...middlewares(schemas, 'auth'), recipeController.getAllRecep);
    router.get('/:id', ...middlewares(schemas, 'auth'), recipeController.getOneRecep);
};
