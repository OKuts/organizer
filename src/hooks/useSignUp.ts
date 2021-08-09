/* Core */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

/* Other */
import { authActions } from '../lib/redux/actions';
import { apiAuth } from '../api';
import { IRegistrationBodyModel } from '../types/RegistrationBodyModel';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: IRegistrationBodyModel) => {
        return apiAuth.signUp(credentials);
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
