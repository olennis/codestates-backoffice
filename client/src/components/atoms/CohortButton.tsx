// @flow ' 
import axios from 'axios';
import * as React from 'react';
import { Student } from '../molecules/Student';
type Cohort = {
    cohort: string,
    nth: string,
    setData: any,
};
export const CohortButton = (Props: Cohort) => {
    return (
        <span>
            <button onClick={() => {
                axios
                    .get(
                        ` https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/getUsersByCohort?cohort=${Props.cohort} ${Props.nth}기`
                    )
                    .then((res) => {
                        Props.setData(res.data.users)
                    })
                    .catch((err) => { console.log(err) })
            }}>
                기수 찾기!
                </button>
        </span>
    );
};