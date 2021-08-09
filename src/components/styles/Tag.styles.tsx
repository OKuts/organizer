import styled, { css } from 'styled-components';

interface IProps  {
    bg: string;
    color: string;
    selected: boolean;
}

const select = css`
    border: 1px solid gray;
    opacity: 1;

    &:hover {
        cursor: initial;
        transform: initial;
    }
`;

export const TagWrapper = styled.span`
    display: inline-flex;
    justify-content: center;
    width: 92px;
    padding: 9px auto 8px auto;
    margin-right: 9px;
    font-size: 14px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
    border: 1px solid transparent;
    border-radius: 4px;
    opacity: 0.4;
    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.1);
    }

    ${(props: IProps) => props.selected && select};
`;
