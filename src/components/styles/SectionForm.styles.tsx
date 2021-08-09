import styled from 'styled-components';

export const SectionFormWrapper = styled.section`
    width: calc(40% - 45px);
    margin: 0 auto;

    & form {
        padding: 50px 40px;
        background-color: #fff;
        border-radius: 10px;

        & fieldset {
            border: unset;

            & + p {
                margin-top: 40px;
                font-family: "Roboto", sans-serif;
                font-size: 14px;
                font-weight: 200;
                color: #98a9bc;
            }

            & span {
                margin-bottom: 5px;
                color: #8d211d;
            }
        }

        & legend {
            margin-bottom: 20px;
            font-family: "Roboto", sans-serif;
            font-size: 24px;
            font-weight: 500;
            color: #778ca2;
            text-align: center;
        }
    }

    & input {
        width: 100%;
        padding: 10px 0;
        margin-bottom: 5px;
        font-size: 20px;
        border: none;
        border-bottom: 1px solid #ececec;
        outline: none;
    }

    & [type='submit'] {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 9px 19px 8px;
        margin-right: 10px;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        background-color: #4d7cfe;
        border: none;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`;
