// Core
import axios from 'axios';

import { TODO_API_URL } from './url';
import { IRegistrationBodyModel, ILoginFormShape } from '../types';

export const apiAuth = Object.freeze({
    async signUp(credentials: IRegistrationBodyModel) {
        const { confirmPassword, ...body } = credentials;
        const { data } = await axios.post(
            `${TODO_API_URL}/auth/registration`,
            body,
        );

        return data;
    },

    async login(credentials: ILoginFormShape) {
        const { email, password } = credentials;
        const { data } = await axios.get(
            `${TODO_API_URL}/auth/login`,
            {
                headers: {
                    authorization: `Basic ${btoa(`${email}:${password}`)}`,
                },
            },
        );

        return data;
    },

    async profile(credentials: string) {
        const { data } = await axios.get(
            `${TODO_API_URL}/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${credentials}`,
                },
            },
        );

        return data;
    },
});
