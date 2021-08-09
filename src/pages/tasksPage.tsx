/* Core */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// /* Components */

import { TaskCardForm } from '../components/forms/TaskCardForm';
import { getStateTasks } from '../lib/redux/selectors';
import { TaskList } from '../components/Tasks/TaskList';
import { TaskListWrapper } from '../components/styles/TaskList.style';
import { tasksActions } from '../lib/redux/actions';
import { useTodos } from '../hooks';

export const TasksPage = () => {
    const { data, isFetched } = useTodos();
    const { tasks, editId } = useSelector(getStateTasks);
    const dispatch = useDispatch();

    const onButton = () => {
        dispatch(tasksActions.setEditId('new'));
    };

    useEffect(() => {
        if (isFetched) {
            dispatch(tasksActions.setTask(data));
        }
    }, [isFetched, data]);

    if (!tasks) return null;

    return (
        <main>
            <div
                className = 'controls'>
                <i className = 'las' />
                <button
                    onClick = { onButton }
                    className = 'button-create-task'>
                    Новая задача
                </button>
            </div>
            <div className = 'wrap'>
                <TaskListWrapper empty = { !tasks.length }>
                    { tasks.length > 0 && <TaskList tasks = { tasks } /> }
                </TaskListWrapper>
                { editId && <div className = 'task-card'><TaskCardForm /></div> }
            </div>
        </main>
    );
};
