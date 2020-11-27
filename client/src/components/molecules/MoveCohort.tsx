// @flow 
import * as React from 'react';
import { Name } from '../atoms/Name'
import { Email } from '../atoms/Email'
import { GitId } from '../atoms/GitId'
import { Before } from '../atoms/Before'
import { Present } from '../atoms/Present'

type Props = {
    student: any,
    gitCheck: any
    slackCheck: any
    calendar: any
};
export const MoveCohort = (props: Props) => {
    return (
        <>
            <Name student={props.student}></Name>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>
            <div>{props.gitCheck}</div>
            <div>{props.slackCheck}</div>
            <div>{props.calendar}</div>
        </>
    );
};