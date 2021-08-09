import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
/* Other */
import { apiTodo } from '../api';
import { tasksActions } from '../lib/redux/actions';
import { getEditId } from '../lib/redux/selectors';

export const useDeleteTodo = () => {
    const dispatch = useDispatch();
    const editId = useSelector(getEditId);

    const mutation = useMutation(() => {
        return apiTodo.deleteTodo(editId);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            dispatch(tasksActions.deleteTask(editId));
            dispatch(tasksActions.setEditId(''));
            dispatch(tasksActions.resetError());
        }
    }, [mutation.isSuccess]);

    return mutation;
};
