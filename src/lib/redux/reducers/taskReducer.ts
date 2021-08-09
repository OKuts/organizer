// Other
import { tasksTypes, errorTypes } from '../types';
import {
    ITodoModelReturn,
    ITaskStateModel,
    ITaskActionModel,
} from '../../../types';

const initialState = {
    tasks:        [],
    editId:       '',
    errorMessage: '',
    error:        false,
};

export const taskReducer = (state = initialState, action: ITaskActionModel): ITaskStateModel  => {
    switch (action.type) {
        case tasksTypes.DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((item: ITodoModelReturn) => item.id !== action.payload),
            };
        }

        case tasksTypes.COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task: ITodoModelReturn) => {
                    if (task.id === action.payload) return { ...task, completed: true };

                    return task;
                }),
            };
        }

        case tasksTypes.SET_TASKS: {
            return {
                ...state, tasks: action.payload,
            };
        }

        case tasksTypes.ADD_TASK: {
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
            };
        }

        case tasksTypes.EDIT_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task: ITodoModelReturn) => {
                    if (task.id === action.payload.id) return { ...action.payload };

                    return task;
                }),
            };
        }

        case tasksTypes.SET_EDIT_ID: {
            return { ...state, editId: action.payload };
        }

        case errorTypes.SET_ERROR: {
            return { ...state, errorMessage: action.payload, error: true  };
        }

        case errorTypes.RESET_ERROR: {
            return { ...state, errorMessage: '', error: false };
        }

        default: {
            return state;
        }
    }
};
