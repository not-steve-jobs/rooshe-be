import { RecipeReviewController } from './recipeReview.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const recipeReviewController = new RecipeReviewController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), recipeReviewController.create);
    router.put('/:id', ...middlewares(schemas, 'auth'), recipeReviewController.update);
    router.delete('/:id', ...middlewares(schemas, 'auth'), recipeReviewController.delete);
};
