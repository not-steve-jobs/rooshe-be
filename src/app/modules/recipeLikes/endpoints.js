import { RecipeLikeController } from './recipeLike.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const recipeLikeController = new RecipeLikeController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), recipeLikeController.like);
    router.delete('/', ...middlewares(schemas, 'auth'), recipeLikeController.disLike);
};
