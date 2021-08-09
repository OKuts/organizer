import { useQuery } from 'react-query';
/* Other */
import { apiTodo } from '../api';

export const useTodos = () => {
    const query = useQuery(['todos'], apiTodo.getTodos);

    return query;
};
