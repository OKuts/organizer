import { IStateModel } from '../../../types/StateModel';

export const getToken = (state: IStateModel): string => {
    return state.auth.token;
};

export const getErrorMessage = (state: IStateModel): string => {
    return state.auth.errorMessage;
};
