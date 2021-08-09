import styled, { css } from 'styled-components';

interface IProps  {
    completed: boolean;
}

const completed = css`
    &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Line Awesome Free';
        font-weight: 900;
        color: #fff;
        content: '\f00c';
        background-color: #4d7cfe;
    }

    .title {
        color: #778ca2;
    }
`;

export const TaskWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;

    &:hover {
        cursor: pointer;
        background-color: #fdfdfd;
    }

    &.selected {
        background-color: #fdfdfd;
    }

    &::before {
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 12px;
        content: '';
        background-color: #e8ecef;
        border-radius: 2px;
    }

    &::after {
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 1px;
        content: '';
        background-color: #e8ecef;
    }

    .title {
        margin-top: 1px;
        font-size: 16px;
        line-height: 1;
        color: #252631;
    }

    .meta {
        position: absolute;
        right: 0;

        .deadline {
            margin-right: 18px;
            margin-bottom: 0;
            font-size: 14px;
            color: #98a9bc;

            &::before {
                margin-right: 6px;
                font-family: 'Line Awesome Free';
                font-weight: 900;
                content: '\f133';
            }
        }
    }

    ${(props: IProps) => props.completed && completed};
`;
