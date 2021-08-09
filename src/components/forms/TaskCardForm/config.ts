/* Core */
import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const requiredMessage = 'Поле ${path} должно быть заполнено';
const requiredTagMessage = 'Необходимо выбрать тег задачи';

export const taskCardFormSchema: yup.SchemaOf<ITaskFormShape> = yup.object().shape({
    title: yup
        .string()
        .min(3, 'Поле ЗАДАЧИ меньше 3 знаков')
        .max(50, 'Поле ЗАДАЧИ больше 50 знаков')
        .required(requiredMessage),
    deadline: yup
        .date()
        .required(''),
    description: yup
        .string()
        .min(3, 'Поле ОПИСАНИЕ меньше 3 знаков')
        .required(requiredMessage),
    tag: yup
        .string()
        .required(requiredTagMessage),
});


interface ITaskFormShape {
    title: string;
    deadline: Date | string;
    description: string;
    tag: string;
}
