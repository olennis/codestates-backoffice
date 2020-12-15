// @flow 
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import styled from 'styled-components'

type Props = {
    setTab: any
};
export const WorksView = (props: Props) => {
    const WorksViewTab = (event: any) => {
        props.setTab(event.target.value)
    }
    return (
        <span>
            <WorksButton onClick={(event: any) => WorksViewTab(event)} value={3}>과제 현황</WorksButton>
        </span>
    );
};

const WorksButton = styled.button`
    margin-left: 10px;
    padding: 15px 25px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #050505;
    letter-spacing: 4px;
    background-color: white;
    border: none;
    border-radius: 15px;
    border: 1px solid white;
    background-image: linear-gradient(
    120deg, transparent 0%, transparent 50%, rgb(65, 83, 170) 70%
    );
    background-size: 230%;
    transition: all 0.5s;
    &:hover {
        color: white;
        font-weight: bold;
        background-position: 100%;
    };
    &:active {
        transform: translateY(10px);
    }
`