import { RecipeCommentController } from './recipeComment.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const recipeCommentController = new RecipeCommentController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), recipeCommentController.create);
    router.put('/:id', ...middlewares(schemas, 'auth'), recipeCommentController.update);
    router.delete('/:id', ...middlewares(schemas, 'auth'), recipeCommentController.delete);
};
