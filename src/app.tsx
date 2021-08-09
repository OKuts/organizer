
import { Routes, Route, Navigate } from 'react-router-dom';

import {
    SignUpPage, LoginPage, ProfilePage, LogOutPage, TasksPage,
} from './pages';
import { Footer, Guardian } from './components';

export const App = () => {
    return (
        <>
            <Guardian>
                <Routes>
                    <Route path = '/profile' element = { <ProfilePage /> } />
                    <Route path = '/tasks' element = { <TasksPage /> } />
                    <Route path = '/login' element = { <LoginPage /> } />
                    <Route path = '/signup' element = { <SignUpPage /> } />
                    <Route path = '/logout' element = { <LogOutPage /> } />
                    <Route path = '*' element = { <Navigate to = '/login' /> } />
                </Routes>
            </Guardian>
            <Footer />
        </>
    );
};

