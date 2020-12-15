// @flow ' 
import axios from 'axios';
import * as React from 'react';
import styled from "styled-components";

type Cohort = {
    cohort: string,
    nth: string,
    setData: any,
};
export const CohortButton = (Props: Cohort) => {
    return (
        <span>
            <Button style={{ width: "20%", height: '55px', marginLeft: "5px" }} onClick={() => {
                axios
                    .get(
                        ` https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/getUsersByCohort?cohort=${Props.cohort} ${Props.nth}기`
                    )
                    .then((res) => {
                        Props.setData(res.data.users)
                    })
                    .catch((err) => { console.log(err) })
            }}>
                Go
                </Button>
        </span>
    );
};

const Button = styled.button`
    background-color: rgb(65, 83, 170);
    border: none;
    border-radius: 5px;
    color: lightgray;
    &:hover {
        color: white;
    }
    &:active {
        transform: translateY(1px);
    }
`