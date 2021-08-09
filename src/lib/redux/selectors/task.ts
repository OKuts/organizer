import { IStateModel } from '../../../types/StateModel';
import { ITodoModelReturn, ITaskStateModel } from '../../../types';

export const getTasks = (state: IStateModel): ITodoModelReturn[]  => {
    return state.tasks.tasks;
};

export const getStateTasks = (state: IStateModel): ITaskStateModel  => {
    return state.tasks;
};

export const getEditId = (state: IStateModel): string => {
    return state.tasks.editId;
};
