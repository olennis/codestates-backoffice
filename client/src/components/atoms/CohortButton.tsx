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
                console.log(`${Props.cohort} ${Props.nth}기`)

                axios
                    .get(
                        ` https://34bdc142dd6f.ngrok.io/tool/getUserInfo?cohort=${Props.cohort} ${Props.nth}기`

              
                    )
                    .then((res) => {
                        console.log('수강생 데이텨 : ', res.data)
                        Props.setData(res.data)


                    })
                    .catch((err) => { console.log(err) })
            }}>
                기수 찾기!
                </button>
        </span>
    );
};
