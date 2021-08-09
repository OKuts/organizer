// @ts-nocheck
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getToken } from '../lib/redux/selectors';

import { Nav } from './Nav';

export const Guardian = ({ children }) => {
    const token = useSelector(getToken);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate('/login', { replace: true });
    }, [token]);

    return (
        <>
            <Nav token = { token } />
            { children }
        </>
    );
};
