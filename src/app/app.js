import express from 'express';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import enableModules from './modules';
import expressValidator  from 'express-validator';
import cookieParser from 'cookie-parser';


import errorHandler from './middlewares/errorHandler';


class Application {
    app;
    router;

    constructor() {
        this.app = express();
        this.initApp();
    }
    initApp() {
        this.configApp();
        this.setParams();
        this.setRouter();
        this.enableModules();
        this.setErrorHandler();
    }

    configApp() {
        this.app.use(expressValidator())
            .use(json())
            .use(urlencoded({ extended: true }))
            .use(cookieParser())
            .use(helmet())
    }
    setParams() {
        this.app.set('json spaces', 4);
    }

    setRouter() {
        this.router = express.Router();
        this.app.use(`/`, this.router);
    }

    setErrorHandler() {
        this.app.use(errorHandler);
    }
    enableModules() {
        enableModules(this.router);
    }

}

export default () => new Application().app;