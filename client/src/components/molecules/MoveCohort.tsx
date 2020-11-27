// @flow 
import * as React from 'react';

import {Name} from '../atoms/Name'
import {Email} from '../atoms/Email'
import {GitId} from '../atoms/GitId'
import {Before} from '../atoms/Before'
import {Present} from '../atoms/Present'
import {StudentCheck} from '../atoms/StudentCheck'

type Props = {
    student : any,
    index : any,
    data : any,
    setData : any,
    gitCheck: any,
    slackCheck: any,
    calendar: any,

};
export const MoveCohort = (props: Props) => {
    return (
        <>
             <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data}></StudentCheck>
            <Name student={props.student}></Name>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>
            <div>{props.gitCheck}</div>
            <div>{props.slackCheck}</div>
            <div>{props.calendar}</div>

        </>
    );
};