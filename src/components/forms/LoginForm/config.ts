/* Core */
import * as yup from 'yup';
import { ILoginFormShape } from '../../../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина — ${max} символов';

export const loginSchema: yup.SchemaOf<ILoginFormShape> = yup.object().shape({
    email: yup
        .string()
        .email('почта должна быть настоящей')
        .required('поле email обязательно для заполнения'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required('*'),
});
