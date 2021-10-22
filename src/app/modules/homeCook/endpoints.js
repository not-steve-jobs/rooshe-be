import { HomeCookController } from './homeCook.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const homeCookController = new HomeCookController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'auth'), homeCookController.create);
};
