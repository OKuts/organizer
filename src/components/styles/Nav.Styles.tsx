import styled from 'styled-components';

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px 40px;

    & a {
        margin-left: 30px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: 200;
        color: #98a9bc;
        text-decoration: unset;

        &.active,
        &:hover {
            font-weight: 700;
            color: #4d7cfe;
        }
    }

    button a {
        margin-left: 0;
    }

    & button:hover {
        color: #fff;
        cursor: pointer;
        background-color: #fe4d97;
        transform: scale(1.1);
    }
`;
