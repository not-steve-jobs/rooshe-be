import { REQUIRED } from '../../configs/constants';

export default {
    signup: {
        validation: {
            email: {
                in: 'body',
                trim: true,
                isEmail: true,
                isLength: {
                    errorMessage: REQUIRED('email'),
                    options: {min: 1}
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
        },
    }
};