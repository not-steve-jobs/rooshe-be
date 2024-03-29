import { REQUIRED } from '../../configs/constants';

export default {
    auth: {
        authentication: true,
    },

    reset: {
        validation: {
            password: {
                in: 'body',
                trim: true,
                String: true,
                isLength: {
                    errorMessage: REQUIRED('password'),
                    options: { min: 6 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('password')
                },
            }
        }
    },

    signup: {
        validation: {
            first_name: {
                in: 'body',
                trim: true,
                String: true,
                isLength: {
                    errorMessage: REQUIRED('first_name'),
                    options: { min: 3 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('first_name')
                },
            },
            last_name: {
                in: 'body',
                trim: true,
                String: true,
                isLength: {
                    errorMessage: REQUIRED('last_name'),
                    options: { min: 3 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('last_name')
                },
            },
            email: {
                in: 'body',
                trim: true,
                isEmail: true,
                isLength: {
                    errorMessage: REQUIRED('email'),
                    options: { min: 1 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('email')
                },
            },
            password: {
                in: 'body',
                trim: true,
                isLength: {
                    errorMessage: REQUIRED('password'),
                    options: { min: 6 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('password')
                },
            },
            phone: {
                in: 'body',
                trim: true,
                Number: true,
                isLength: {
                    errorMessage: REQUIRED('phone'),
                    options: { min: 6 }
                },
                notEmpty: {
                    errorMessage: REQUIRED('phone')
                },
            },
            bDay: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('bDay')
                },
            },
            address: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('address')
                },
            },
        },
    }

};
