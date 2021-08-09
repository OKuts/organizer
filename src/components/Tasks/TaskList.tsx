import { Task } from './Task';
import { ITodoModelReturn } from '../../types';

interface IProps {
    tasks: ITodoModelReturn[];
}

export const TaskList = ({ tasks }: IProps) => {
    const taskJsx = tasks.map((item) => {
        return <Task
            key = { item.id }
            { ...item } />;
    });

    return (
        <div className = 'tasks'>
            { taskJsx }
        </div>
    );
};
