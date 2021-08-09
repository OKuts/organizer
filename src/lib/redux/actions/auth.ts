// Other
import { ISetToken, ISetError, IResetError } from '../../../types';
import { authTypes, errorTypes } from '../types';

export const authActions = Object.freeze({
    setToken: (token: string): ISetToken => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },
    setError: (message: string): ISetError => {
        return {
            type:    errorTypes.SET_ERROR,
            payload: message,
        };
    },
    resetError: (): IResetError => {
        return {
            type: errorTypes.RESET_ERROR,
        };
    },
});
