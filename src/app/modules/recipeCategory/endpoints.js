import { RecipeCategoryController } from './recipeCategory.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const recipeCategoryController = new RecipeCategoryController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), recipeCategoryController.create);
    router.put('/:id', ...middlewares(schemas, 'auth'), recipeCategoryController.update);
    router.delete('/:id', ...middlewares(schemas, 'auth'), recipeCategoryController.delete);
};
