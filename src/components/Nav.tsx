/* Core */
import { NavLink } from 'react-router-dom';

import { NavWrapper } from './styles/Nav.Styles';

interface IProp {
    token: string;
}

export const Nav = ({ token }: IProp) => {
    return (
        <>
            <NavWrapper>
                { !token && <NavLink to = '/login'>Войти</NavLink> }
                <NavLink aria-disabled = { !token } to = '/tasks'>К задачам</NavLink>
                <NavLink aria-disabled = { !token } to = '/profile'>Профиль</NavLink>
                { token
                    && <button className = 'button-logout'>
                        <NavLink to = '/logout'>Выйти</NavLink>
                    </button> }
            </NavWrapper>
        </>
    );
};
