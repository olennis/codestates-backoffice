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
        <tbody>
            <tr>
                <StudentInfo>
                    <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                        setCheckNum={props.setCheckNum}></StudentCheck>
                </StudentInfo>
                <StudentInfo><Name student={props.student}></Name></StudentInfo>
                <StudentInfo><Email student={props.student}></Email></StudentInfo>
                <StudentInfo><GitId student={props.student}></GitId></StudentInfo>
                <StudentInfo><Before student={props.student}></Before></StudentInfo>
                <StudentInfo><Present student={props.student}></Present></StudentInfo>
            </tr >
        </tbody>
    );
};

const StudentInfo = styled.th`
    padding-top: 20px;
`


/**
 * ! 표 상태로 돌리려면 이렇게 붙여넣기
 *   <tr style={{ border: "1px solid" }}>
            <td style={{ border: "1px solid", padding: '4px' }}>
                <StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                    setCheckNum={props.setCheckNum}></StudentCheck>
            </td>
            <td style={{ border: "1px solid", padding: '4px' }}><Name student={props.student}></Name></td>
            <td style={{ border: "1px solid", padding: '4px' }}><Email student={props.student}></Email></td>
            <td style={{ border: "1px solid", padding: '4px' }}><GitId student={props.student}></GitId></td>
            <td style={{ border: "1px solid", padding: '4px' }}><Before student={props.student}></Before></td>
            <td style={{ border: "1px solid", padding: '4px' }}><Present student={props.student}></Present></td>
        </tr >
 */