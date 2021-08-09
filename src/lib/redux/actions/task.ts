// Other
import { tasksTypes, errorTypes } from '../types';
import {
    ITodoModelReturn,
    ICompleteTask,
    ISetTask,
    IAddTask,
    IDeleteTask,
    IEditTask,
    ISetEditId,
    ISetError,
    IResetError,
} from '../../../types';

export const tasksActions = Object.freeze({
    completeTask: (id: string): ICompleteTask => {
        return {
            type:    tasksTypes.COMPLETE_TASK,
            payload: id,
        };
    },
    setTask: (task: ITodoModelReturn[]): ISetTask => {
        return {
            type:    tasksTypes.SET_TASKS,
            payload: task,
        };
    },
    addTask: (task: ITodoModelReturn): IAddTask => {
        return {
            type:    tasksTypes.ADD_TASK,
            payload: task,
        };
    },
    deleteTask: (id: string): IDeleteTask => {
        return {
            type:    tasksTypes.DELETE_TASK,
            payload: id,
        };
    },
    editTask: (task: ITodoModelReturn): IEditTask => {
        return {
            type:    tasksTypes.EDIT_TASK,
            payload: task,
        };
    },
    setEditId: (editId: string): ISetEditId => {
        return {
            type:    tasksTypes.SET_EDIT_ID,
            payload: editId,
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
