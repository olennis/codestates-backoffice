// @flow 
import * as React from 'react';

import { Name } from '../atoms/Name'
import { Before } from '../atoms/Before'
import { Present } from '../atoms/Present'
import { StudentCheck } from '../atoms/StudentCheck'
import { Result } from '../atoms/Result'
import styled from 'styled-components'

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
        <tr>
            <td><StudentCheck student={props.student} index={props.index} setData={props.setData} data={props.data} checkNum={props.checkNum}
                setCheckNum={props.setCheckNum}></StudentCheck></td>
            <td><Name student={props.student}></Name></td>
            <td><Before student={props.student}></Before></td>
            <td><Present student={props.student}></Present></td>

            <Emojibottom>
                <span>
                    {
                        props.student.checkValue && props.gitCheck ?
                            <td>🙆🏻‍♂️</td> :
                            <td>🙅🏻‍♀️</td>
                    }
                </span>
                <span>
                    {
                        props.student.checkValue && props.slackCheck ?
                            <tr>🙆🏻‍♂️</tr> :
                            <tr>🙅🏻‍♀️</tr>
                    }
                </span>
                <td>{
                    props.student.checkValue && props.calendar ?
                        <td>🙆🏻‍♂️</td> :
                        <td>🙅🏻‍♀️</td>
                }</td>
            </Emojibottom>
            <td>{
                props.student.result ?
                    <Result student={props.student}></Result> :
                    <span></span>
            }</td>
        </tr>
    );
};

const Emoji = styled.td`
    background: red;
`

const Emojibottom = styled.td`
    background: blue;
`