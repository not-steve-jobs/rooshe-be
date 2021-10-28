import { Router } from 'express';
import recipeActionsEndpoints from './endpoints';

export default class RecipeLikes {
    apiRouter;
    router;

    constructor (apiRouter) {
        this.apiRouter = apiRouter;
        this.router = Router();
    }

    createEndpoints() {
        this.assignRouter();
        this.assignEndpoints();
    }

    assignRouter() {
        this.apiRouter.use('/recipe-saved', this.router);
    }

    assignEndpoints() {
        recipeActionsEndpoints(this.router);
    }
}
