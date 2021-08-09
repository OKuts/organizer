/* Core */
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

/* Components */
import { SectionFormWrapper } from '../../styles/SectionForm.styles';
import { Input } from '../elements';

/* Other */
import { ISignUpFormShape, signUpFormSchema } from './config';
import { useSignUp } from '../../../hooks';

export const SignUpForm = () => {
    const auth = useSignUp();
    const navigate = useNavigate();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(signUpFormSchema),
    });

    const signUp = form.handleSubmit(async (credentials: ISignUpFormShape) => {
        await auth.mutateAsync(credentials);
        form.reset();
        navigate('/tasks');
    });

    return (
        <SectionFormWrapper>
            <form onSubmit = { signUp }>
                <fieldset disabled = { auth.isLoading }>
                    <legend>Регистрация</legend>

                    { form.formState.errors.name
                            && <span>{ form.formState.errors.name.message }</span> }
                    <Input
                        placeholder = 'Имя и фамилия'
                        error = { form.formState.errors.name }
                        register = { form.register('name') } />

                    { form.formState.errors.email
                            && <span>{ form.formState.errors.email.message }</span> }
                    <Input
                        placeholder = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />

                    { form.formState.errors.password
                            && <span>{ form.formState.errors.password.message }</span> }
                    <Input
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />

                    { form.formState.errors.confirmPassword
                            && <span>{ form.formState.errors.confirmPassword.message }</span> }
                    <Input
                        placeholder = 'Подтверждение пароля'
                        type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />

                    <input
                        type = 'submit'
                        value = 'Зарегистрироваться' />
                </fieldset>
                <p>
          Перейти к <Link to = '/login'>логину</Link>.
                </p>
            </form>
        </SectionFormWrapper>
    );
};
