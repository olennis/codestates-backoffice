// @flow ' 
import axios from 'axios';
import * as React from 'react';
// import { Student } from '../molecules/Student';
import { Button } from '@material-ui/core';

type Cohort = {
    cohort: string,
    nth: string,
    setData: any,
};
export const CohortButton = (Props: Cohort) => {
    return (
        <span>
            <Button variant="outlined" color="default" size="large" onClick={() => {
                console.log(`${Props.cohort} ${Props.nth}기`)

                axios
                    .get(
                        ` https://q4xflu1p8i.execute-api.us-east-1.amazonaws.com/dev/getUsersByCohort?cohort=${Props.cohort} ${Props.nth}기`


                    )
                    .then((res) => {
                        console.log('수강생 데이텨 : ', res.data)
                        Props.setData(res.data.users)


                    })
                    .catch((err) => { console.log(err) })
            }}>
                필터
                </Button>
        </span>
    );
};
