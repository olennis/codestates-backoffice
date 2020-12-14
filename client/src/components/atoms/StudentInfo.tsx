/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react'
import styled from "styled-components"

type Props = {
    setTab: any
};
export const StudentInfo = (props: Props) => {
    const studentTab = (event: any) => {
        props.setTab(event.target.value)
    }
    return (
        <span>
            <InfoButton onClick={(event: any) => studentTab(event)} value={1}>수강생 정보</InfoButton>
        </span>
    );
};

const InfoButton = styled.button`
    padding: 15px 18px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #050505;
    letter-spacing: 4px;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    border: 1px solid white;
    margin-left: 30px;
    background-image: linear-gradient(
    120deg, transparent 0%, transparent 50%, rgb(7, 134, 148) 70%
    );
    background-size: 230%;
    transition: all 0.5s;
    &:hover {
        color: white;
        background-position: 100%;
    }
`