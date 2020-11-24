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
    index : any
};
export const Student = (props: Props) => {
    

    return (
        <div >
            <StudentCheck student={props.student} index={props.index}></StudentCheck>
            <Name student={props.student}></Name>
            <Email student={props.student}></Email>
            <GitId student={props.student}></GitId>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>
        </div>
    );
};