/* Core */
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/* Components */
import { LoginForm } from '../components/forms';
import { authActions, tasksActions } from '../lib/redux/actions';

export const LogOutPage: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
        dispatch(authActions.setToken(''));
        dispatch(tasksActions.setTask([]));
        navigate('/login');
    }, []);

    return (
        <main>
            <LoginForm />
        </main>

    );
};
