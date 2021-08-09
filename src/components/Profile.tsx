/* Core */
import { useProfile } from '../hooks';

import { ProfileWrapper } from './styles/Profile.style';


export const Profile = () => {
    const profile = useProfile();

    return (
        <ProfileWrapper>
            <p>{ profile.data ? profile.data.name : 'loading ...' }</p>
            <p>{ profile.data ? profile.data.email : 'loading ...' }</p>
        </ProfileWrapper>
    );
};
