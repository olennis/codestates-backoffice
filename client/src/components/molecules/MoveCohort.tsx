// @flow 
import * as React from 'react';

import { Name } from '../atoms/Name'
import { Before } from '../atoms/Before'
import { Present } from '../atoms/Present'
import { StudentCheck } from '../atoms/StudentCheck'
import { Result } from '../atoms/Result'
import styled from 'styled-components'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';

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
        <tbody>
            <StudentTr>
                <Student><StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                    setCheckNum={props.setCheckNum}></StudentCheck></Student>
                <Student><Name student={props.student}></Name></Student>
                <Student><Before student={props.student}></Before></Student>
                <Student><Present student={props.student}></Present></Student>
                <Student>{
                    props.student.checkValue && props.gitCheck ?
                        <CheckCircleIcon style={{ color: green[500] }}></CheckCircleIcon> :
                        <div></div>
                }
                </Student>

                <Student>{
                    props.student.checkValue && props.slackCheck ?
                        <CheckCircleIcon style={{ color: green[500] }}></CheckCircleIcon> :
                        <div></div>
                }
                </Student>

                <Student>
                    {
                        props.student.checkValue && props.calendar ?
                            <CheckCircleIcon style={{ color: green[500] }}></CheckCircleIcon> :
                            <div></div>
                    }
                </Student>

                <Student>{
                    props.student.result ?
                        <Result student={props.student}></Result> :
                        <span></span>
                }</Student>
            </StudentTr>
        </tbody>
    );
};


const StudentTr = styled.tr`
    border: solid 5px rgb(245,246,247);
    color:black;
    &:hover {
        background-color: rgb(242, 246, 252)
    }
`
const Student = styled.th`
    padding-top: 20px;
    font-weight:normal;
    
`