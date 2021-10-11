import { Router } from 'express';
import authEndpoints from './endpoints';

export default class Recipe {
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
        this.apiRouter.use('/recipe', this.router);
    }

    assignEndpoints() {
        authEndpoints(this.router);
    }
}
