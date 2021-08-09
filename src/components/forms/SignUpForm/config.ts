/* Core */
import * as yup from 'yup';
// eslint-disable-next-line no-template-curly-in-string
const noRequired = 'поле ${path} — должно быть заполнено';
// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина поля ${path} — ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина поля ${path} — ${max} символов';

export const signUpFormSchema: yup.SchemaOf<ISignUpFormShape> = yup.object().shape({
    name: yup
        .string()
        .min(3, tooShortMessage)
        .max(50, tooLongMessage)
        .required(noRequired),
    email: yup
        .string()
        .email('почта должна быть настоящей')
        .required(noRequired),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required(noRequired),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required(noRequired),
});

/* Types */
export interface ISignUpFormShape {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
