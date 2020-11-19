// @flow 
import * as React from 'react';
import {Name} from '../atoms/Name'
import {Email} from '../atoms/Email'
import {GitId} from '../atoms/GitId'
import {Before} from '../atoms/Before'
import {Present} from '../atoms/Present'

type Props = {
    student : any
};
export const Student = (props: Props) => {
    return (
        <>
            <Name student={props.student}></Name>
            <Email student={props.student}></Email>
            <GitId student={props.student}></GitId>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>
        </>
    );
};