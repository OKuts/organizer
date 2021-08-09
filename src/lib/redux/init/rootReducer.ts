// Core
import { combineReducers } from 'redux';

import {
    authReducer as auth,
    taskReducer as tasks,
} from '../reducers';

export const rootReducer = combineReducers({
    auth, tasks,
});
