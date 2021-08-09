import { useQuery } from 'react-query';
/* Other */
import { apiTodo } from '../api';

export const useTags = () => {
    const query = useQuery(['tags'], apiTodo.tags);

    return query;
};
