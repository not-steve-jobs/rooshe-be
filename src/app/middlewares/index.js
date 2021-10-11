import validator from './validator';
import auth from './auth';

export default (schemas, actionName) => {
    let middlewares = [];

    if (!schemas[actionName]) {
        return middlewares;
    }
    if (schemas[actionName].validation) {
        middlewares.push(validator(schemas[actionName].validation));
    }
    if (schemas[actionName].authentication) {
        middlewares.push(auth());
    }

    return middlewares;
};
