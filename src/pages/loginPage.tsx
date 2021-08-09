/* Core */
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Components */
import { LoginForm } from '../components/forms';
import { getToken } from '../lib/redux/selectors';

export const LoginPage: FC = () => {
    const token = useSelector(getToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate('/tasks', { replace: true });
    }, []);

    return (
        <main>
            <LoginForm />
        </main>

    );
};
