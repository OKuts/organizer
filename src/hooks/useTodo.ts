import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
/* Other */
import { apiTodo } from '../api';
import { tasksActions } from '../lib/redux/actions';
import { getEditId } from '../lib/redux/selectors';
import { ITodoModel } from '../types';

export const useTodo = () => {
    const editId = useSelector(getEditId);
    const dispatch = useDispatch();
    const mutation = useMutation((credentials: ITodoModel) => {
        const date = credentials.deadline?.toString();
        const data = { ...credentials, deadline: date };

        return editId === 'new' ? apiTodo.addTodo(data) : apiTodo.updateTodo(data, editId);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const res = mutation;
            if (editId === 'new') {
                dispatch(tasksActions.addTask(res.data.data));
            } else {
                dispatch(tasksActions.editTask(res.data.data));
            }
            dispatch(tasksActions.setEditId(''));
            dispatch(tasksActions.resetError());
        }
    }, [mutation.isSuccess]);

    return mutation;
};
