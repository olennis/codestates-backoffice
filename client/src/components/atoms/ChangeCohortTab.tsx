// @flow 
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import styled from "styled-components"

type Props = {
    setTab: any
};
export const ChangeCohortTab = (props: Props) => {
    const moveCohortTab = (event: any) => {
        props.setTab(event.target.value)
    }
    return (
        <span>
            <CohortButton onClick={(event: any) => moveCohortTab(event)} value={2}>기수 이동</CohortButton>
        </span>
    );
};

const CohortButton = styled.button`
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
        background-position: 100%;
    };
    &:active {
        transform: translateY(10px);
    }
`
