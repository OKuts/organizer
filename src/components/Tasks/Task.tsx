import { useDispatch  } from 'react-redux';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { TaskWrapper } from '../styles/Task.styles';
import { TagWrapper } from '../styles/Tag.styles';
import { tasksActions } from '../../lib/redux/actions';
import { ITodoModelReturn } from '../../types';

export const Task = ({
    id, completed, title, deadline, tag,
}: ITodoModelReturn) => {
    const dispatch = useDispatch();
    const selectTask = (taskId: string) => {
        dispatch(tasksActions.setEditId(taskId));
    };

    const formattedDate = format(new Date(deadline), 'dd MMM yyyy', { locale: ru });

    return (
        <TaskWrapper
            completed = { completed }
            onClick = { () => selectTask(id) }>
            <span className = 'title'>{ title }</span>
            <div className = 'meta'>
                <span className = 'deadline'>
                    { formattedDate }
                </span>
                <TagWrapper
                    bg = { tag.bg }
                    selected
                    color = { tag.color }>
                    { tag.name }
                </TagWrapper>
            </div>
        </TaskWrapper>
    );
};
