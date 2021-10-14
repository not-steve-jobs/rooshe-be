import { REQUIRED } from '../../configs/constants';

export default {
    auth: {
        authentication: true,
    },

    recipe: {
        authentication: true,

        validation: {
            name: {
                in: 'body',
                trim: true,
                String: true,
                notEmpty: {
                    errorMessage: REQUIRED('name')
                },
            },
            price: {
                in: 'body',
                trim: true,
                String: true,
                notEmpty: {
                    errorMessage: REQUIRED('price')
                },
            },
            cook_time: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('cookTime')
                },
            },
            portion: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('portion')
                },
            },
            description: {
                in: 'body',
                trim: true,
                isLength: {
                    errorMessage: REQUIRED('description'),
                    options: { min: 6 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('description')
                },
            },
        },
    }
};
