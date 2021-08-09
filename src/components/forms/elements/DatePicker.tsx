import { FC, useEffect } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { endOfDay } from 'date-fns';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);
export const CustomDatePicker: FC<IPropTypes> = (props) => {
    const {
        form,
        defaultValue,
    } = props;

    const today = endOfDay(new Date());
    const day = defaultValue ? new Date(defaultValue) : today;

    useEffect(() => {
        form.setValue('deadline', day);
    }, []);

    return (
        <div className = 'deadline'>
            <span className = 'label'>Дедлайн</span>
            <span className = 'date'>
                <Controller
                    control = { form.control }
                    name = 'deadline'
                    render = { ({ field }) => (
                        <ReactDatePicker
                            locale = 'ru'
                            onChange = { (date: Date) => field.onChange(date) }
                            minDate = { today }
                            selected = { field.value || today }
                            dateFormat = 'dd MMM yyyy' />
                    ) } />
            </span>
        </div>
    );
};
interface IPropTypes {
    form: UseFormReturn;
    defaultValue: string;
}
