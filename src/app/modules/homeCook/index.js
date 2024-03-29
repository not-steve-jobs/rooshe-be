import { Router } from 'express';
import authEndpoints from './endpoints';

export default class HomeCook {
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
        this.apiRouter.use('/homecook', this.router);
    }

    assignEndpoints() {
        authEndpoints(this.router);
    }
}
