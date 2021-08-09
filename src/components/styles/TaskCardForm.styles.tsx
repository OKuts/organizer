import styled from 'styled-components';

export const TaskCardWrapper = styled.form`
    height: none;
    min-height: 600px;
    background-color: #fff;

    input,
    textarea {
        width: 100%;
        margin-bottom: 32px;
        font-size: 16px;
        color: #252631;
        border: none;
        outline: none;
    }

    textarea {
        line-height: 21px;
        resize: none;
    }

    input[type='date'] {
        display: flex;
        align-items: center;
        width: auto;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: #252631;
        border: none;
        outline: none;

        &::before {
            margin-right: 6px;
            font-family: 'Line Awesome Free';
            font-size: 18px;
            font-weight: 900;
            color: #778ca2;
            content: '\f133';
        }
    }

    button {
        margin-bottom: 10px;
    }
`;
