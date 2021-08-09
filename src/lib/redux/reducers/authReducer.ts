// Other
import { authTypes, errorTypes } from '../types';
import { IAuthActionModel } from '../../../types';

interface IAuthStateModel {
    token:        string | null,
    errorMessage: string,
    error:        boolean,
}

const initialState = {
    token:        localStorage.getItem('jwt'),
    errorMessage: '',
    error:        false,
};

export const authReducer = (state = initialState, action: IAuthActionModel): IAuthStateModel => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token:        action.payload,
                error:        false,
                errorMessage: '',
            };
        }
        case errorTypes.SET_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
                error:        true,
            };
        }
        case errorTypes.RESET_ERROR: {
            return {
                ...state,
                errorMessage: '',
                error:        false,
            };
        }
        default: {
            return state;
        }
    }
};
