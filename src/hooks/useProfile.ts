import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
/* Other */
import { apiAuth } from '../api';
import { getToken } from '../lib/redux/selectors';

export const useProfile = () => {
    const token = useSelector(getToken);
    const query = useQuery(['profile', token], () => apiAuth.profile(token));

    return query;
};
