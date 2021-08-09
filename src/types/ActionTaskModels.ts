import { tasksTypes } from '../lib/redux/types';
// eslint-disable-next-line import/no-cycle
import {
    ITagModel, ITodoModelReturn, ISetError, IResetError,
} from '.';

export interface ICompleteTask{
    type: tasksTypes.COMPLETE_TASK;
    payload: string;
}

export interface ISetTask{
    type: tasksTypes.SET_TASKS;
    payload:  ITodoModelReturn[];
}

export interface IAddTask{
    type: tasksTypes.ADD_TASK;
    payload:  ITodoModelReturn;
}

export interface IDeleteTask{
    type: tasksTypes.DELETE_TASK;
    payload:  string;
}

export interface IEditTask{
    type: tasksTypes.EDIT_TASK;
    payload:  ITodoModelReturn;
}

export interface ISetTags{
    type: tasksTypes.SET_TAGS;
    payload:  ITagModel[];
}

export interface ISetEditId{
    type: tasksTypes.SET_EDIT_ID;
    payload:  string;
}

export interface ITaskStateModel {
    tasks:        ITodoModelReturn[],
    editId:       string,
    errorMessage: string,
    error:        boolean,
}

export type ITaskActionModel = ICompleteTask | IEditTask | ISetTask | IAddTask
| IDeleteTask | ISetTags | ISetEditId | ISetError | IResetError;
