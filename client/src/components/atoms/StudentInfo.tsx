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
    padding: 15px 25px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #fc8c03;
    border: none;
    border-radius: 15px;
    &:hover {
        color: black;
    }
`
