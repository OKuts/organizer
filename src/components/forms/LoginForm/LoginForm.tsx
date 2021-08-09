/* Core */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { SectionFormWrapper } from '../../styles/SectionForm.styles';
import { Input } from '../elements';

/* Other */

import { loginSchema } from './config';
import { ILoginFormShape } from '../../../types';
import { useLogin } from '../../../hooks';


export const LoginForm = () => {
    const auth = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(loginSchema),
    });

    const login = form.handleSubmit(async (credentials: ILoginFormShape) => {
        await auth.mutateAsync(credentials);
        form.reset();
    });

    return (
        <SectionFormWrapper>
            <form onSubmit = { login }>
                <fieldset disabled = { auth.isLoading }>
                    <legend>Войти</legend>

                    { form.formState.errors.email
                        && <span>{ form.formState.errors.email.message }</span> }
                    <Input
                        placeholder = 'email'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />

                    { form.formState.errors.password
                        && <span>{ form.formState.errors.password.message }</span> }
                    <Input
                        placeholder = 'password'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />

                    <input
                        type = 'submit'
                        value = 'Войти' />
                </fieldset>
                <p>
          Если у вас до сих пор нет учётной записи, вы можете{ ' ' }
                    <Link to = '/signup'>зарегистрироваться</Link>.
                </p>
            </form>
        </SectionFormWrapper>
    );
};
