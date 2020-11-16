// @flow 
import axios from 'axios';
import * as React from 'react';
type Cohort = {
    cohort:string,
    nth:string
    
};
export const CohortButton = (Props: Cohort) => {
    return (
        <span>
            <button onClick={()=>{
                console.log(`${Props.cohort} ${Props.nth}기`)
                axios.get(
                    `https://3ab605da59b9.ngrok.io/tool/getUserInfo?cohort=${Props.cohort} ${Props.nth}기`
                    )
                    .then((res)=>{console.log(res)})
                    .catch((err)=>{console.log(err)})
            }}>
                기수 찾기!
                </button>
        </span>
    );
};