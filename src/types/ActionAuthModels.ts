import { authTypes } from '../lib/redux/types';
// eslint-disable-next-line import/no-cycle
import { ISetError, IResetError } from '.';

export interface ISetToken{
    type: authTypes.SET_TOKEN;
    payload: string;
}

export type IAuthActionModel = ISetError | IResetError | ISetToken;
