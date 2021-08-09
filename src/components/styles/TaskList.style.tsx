import styled, { css } from 'styled-components';
import bgImage from '../../theme/assets/illustration.png';

interface IProps  {
    empty: boolean;
}

const empty = css`
    display: flex;
    justify-content: center;
    padding-top: 126px;

    .tasks {
        display: none;
    }

    &::before {
        display: block;
        width: 460px;
        height: 311px;
        content: '';
        background-image: url(${bgImage});
        background-size: cover;
    }
`;

export const TaskListWrapper = styled.div`
    ${bgImage}

    flex-shrink: 1;
    width: 100%;
    padding: 30px 0;
    margin: 30px 30px 0;
    background-color: #fff;

    ${(props: IProps) => props.empty && empty}

    .tasks {
        max-height: 600px;
        padding: 0 30px 0;
        overflow-y: scroll;
    }
`;
