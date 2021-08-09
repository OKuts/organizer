/* Core */
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export const Input: FC<IPropTypes> = (props) => {
    let input = <input
        className = { props.className }
        placeholder = { props.placeholder }
        defaultValue = { props.defaultValue }
        type = { props.type }
        { ...props.register } />;

    if (props.tag === 'textarea') {
        input = <textarea
            placeholder = { props.placeholder }
            defaultValue = { props.defaultValue }
            { ...props.register }></textarea>;
    }

    if (props.tag === 'select') {
        const optionsJSX = props.options?.map((option) => {
            return (
                <option key = { option.value } value = { option.value }>
                    { option.name }
                </option>
            );
        });

        input = <select { ...props.register }>{ optionsJSX }</select>;
    }

    return (
        <label>
            { input }
        </label>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};

interface IPropTypes {
    className?: string;
    defaultValue?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    tag?: string;
    register: UseFormRegisterReturn;
    error?: {
        message?: string;
    };
    options?: { value: string; name: string }[];
}
