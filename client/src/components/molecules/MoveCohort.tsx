// @flow 
import * as React from 'react';

import { Name } from '../atoms/Name'
import { Before } from '../atoms/Before'
import { Present } from '../atoms/Present'
import { StudentCheck } from '../atoms/StudentCheck'
import { Result } from '../atoms/Result'

type Props = {
    student: any,
    index: any,
    data: any,
    setData: any,
    gitCheck: any,
    slackCheck: any,
    calendar: any,
    checkNum: any,
    setCheckNum: any

};
export const MoveCohort = (props: Props) => {
    return (
        <div>
            <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                setCheckNum={props.setCheckNum}></StudentCheck>
            <Name student={props.student}></Name>
            <Before student={props.student}></Before>
            <Present student={props.student}></Present>
            {
                props.student.checkValue && props.gitCheck ?
                    <span>🙆🏻‍♂️</span> :
                    <span>🙅🏻‍♀️</span>
            }
            {
                props.student.checkValue && props.slackCheck ?
                    <span>🙆🏻‍♂️</span> :
                    <span>🙅🏻‍♀️</span>
            }
            {
                props.student.checkValue && props.calendar ?
                    <span>🙆🏻‍♂️</span> :
                    <span>🙅🏻‍♀️</span>
            }
            {
                props.student.result ?
                    <Result student={props.student}></Result> :
                    <span></span>
            }

        </div>
    );
};