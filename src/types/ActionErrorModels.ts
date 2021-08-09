import { errorTypes } from '../lib/redux/types';

export interface ISetError{
    type: errorTypes.SET_ERROR;
    payload:  string;
}

export interface IResetError{
    type: errorTypes.RESET_ERROR;
}
