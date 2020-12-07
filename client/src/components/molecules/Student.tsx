// @flow 
import * as React from 'react';
import styled from 'styled-components';
import { Name } from '../atoms/Name'
import { Email } from '../atoms/Email'
import { GitId } from '../atoms/GitId'
import { Before } from '../atoms/Before'
import { Present } from '../atoms/Present'
import { StudentCheck } from '../atoms/StudentCheck'
import { Result } from '../atoms/Result'


type Props = {
    student: any,
    index: any,
    data: any,
    setData: any
    gitCheck: any,
    slackCheck: any,
    calendar: any,
    checkNum: any,
    setCheckNum: any
};
export const Student = (props: Props) => {

    return (
        <div >
            <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                setCheckNum={props.setCheckNum}></StudentCheck>
            <Name student={props.student}></Name>
            <Email student={props.student}></Email>
            <GitId student={props.student}></GitId>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>

        </div>
    );
};

