/* Core */
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Other */
import { apiAuth } from '../api';
import { authActions } from '../lib/redux/actions';
import { ILoginFormShape } from '../types';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return apiAuth.login(credentials);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            dispatch(authActions.setToken(mutation.data?.data));
            dispatch(authActions.resetError());
            localStorage.setItem('jwt', mutation.data?.data);
            navigate('/tasks');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
